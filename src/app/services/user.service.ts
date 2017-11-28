import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {AppConst} from '../constants/my-const';
import {User} from '../models/user.model';
import 'rxjs/add/operator/map';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserService {
  private serverPath: string = AppConst.serverPath;
  private emailSent = false;
  private usernameExists = false;
  private emailExists = false;
  private emailNotExists = false;
  private forgetPasswordEmailSent = false;
  private updateSuccess = false;
  private incorrectPassword = false;
  private dataFetched = false;
  private user: User;
  userChanged = new Subject<User>();
  constructor(private http: Http) {}

  newUser(user: User) {
    const url = this.serverPath + '/user/newUser';
    const userInfo = {
      'username' : user.username,
      'email' : user.email
    };
    const headers = new Headers({
      'Content-Type' : 'application/json',
      'X-Auth-Token' : localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, JSON.stringify(userInfo), {headers: headers}).subscribe(
      res => {
        console.log(res);
        this.emailSent = true;
      },
      error => {
        console.log(error.text());
        const errorMsg = error.text();
        if (errorMsg === 'usernameExists') { this.usernameExists = true; }
        if (errorMsg === 'emailExists') { this.emailExists = true; }
      }
    );
  }

  retrievePassword(email: string) {
    const url = this.serverPath + '/user/forgotPassword';
    const recoverEmail = {
      'email': email
    };
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, JSON.stringify(recoverEmail), {headers: headers}).subscribe(
      res => {
        console.log(res);
        this.forgetPasswordEmailSent = true;
      },
      error => {
        console.log(error.text());
        if (error.text() === 'Email Not Found') { this.emailNotExists = true; }
      }
    );
  }

  updateUserInfo(user: User) {
    const url = this.serverPath + '/user/updateUserInfo';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Auth-Token': localStorage.getItem('xAuthToken')
    });
    return this.http.post(url, JSON.stringify(user), {headers: headers}).subscribe(
      res => {
        console.log(res);
        this.updateSuccess = true;
      },
      error => {
        console.log(error.text());
        if (error.text() === 'Incorrect Current Password') {
          this.incorrectPassword = true;
        }
      }
    );
  }

  getCurrentUser() {
    const url = this.serverPath + '/user/getCurrentUser';
    const headers = new Headers({
      'Content-Type': 'application/json',
      'X-Auth-Token': localStorage.getItem('xAuthToken')
    });
    return this.http.get(url, {headers: headers}).map(
      res => {
        this.dataFetched = true;
        return res.json();
      },
      error => {
        console.log(error);
      }
    ).subscribe(
      (user: User) => {
       this.user = user;
       console.log('test');
       this.userChanged.next(this.user);
       console.log('test2');
      }
    );
  }

  getUser() {
    return this.user;
  }

  isDataFetched() {
    return this.dataFetched !== false;
  }

  isUpdateSuccessful() {
    return this.updateSuccess !== false;
  }

  isInCorrectCurrentPassword() {
    return this.incorrectPassword !== false;
  }

  isEmailSent(): boolean {
    return this.emailSent !== false;
  }

  isForgetPswEmailSent(): boolean {
    return this.forgetPasswordEmailSent !== false;
  }

  doUsernameExists(): boolean {
    return this.usernameExists !== false;
  }

  doEmailExists(): boolean {
    return this.emailExists !== false;
  }

  doEmailNotExists(): boolean {
    return this.emailNotExists !== false;
  }
}
