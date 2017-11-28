import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/my-const';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

  private isLoggedIn= false;
  private loginError = false;

  private  serverPath: string = AppConst.serverPath;
  constructor(private http: Http, private router: Router) {}

  sendCredential(username: string, password: string) {
    const url = this.serverPath + '/token';
    const  encodedCredential = username + ':' + password;
    const basicHeader = 'Basic ' + btoa(encodedCredential);
    const headers = new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': basicHeader
      }
    );
     return this.http.get(url, {headers : headers}).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('xAuthToken', res.json().token);
        this.isLoggedIn = true;
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
        this.isLoggedIn = false;
        this.loginError = true;
      }
    );
  }

  checkSession() {
    const url = this.serverPath + '/checkSession';
    const headers = new Headers({
      'X-Auth-Token': localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers : headers}).subscribe(
      res => {
        this.isLoggedIn = true;
      },
      error => {
        this.isLoggedIn = false;
      }
    );
  }

  logOut() {
    const url = this.serverPath + '/user/logOut';
    const headers = new Headers({
      'X-Auth-Token': localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, null, {headers: headers}).subscribe(
      res => {
        this.isLoggedIn = false;
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    );
  }

  isAuthenticated() {
    return this.isLoggedIn !== false;
  }

  loggingError() {
    return this.loginError !== false;
  }
}
