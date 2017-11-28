import {Component, OnInit, ViewChild} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;
  @ViewChild('newAccountForm') accountForm: NgForm;
  @ViewChild('forgotPasswordForm') forgotPasswordForm: NgForm;

  private user: User;

  constructor(private loginService: LoginService, public userService: UserService) { }

  ngOnInit() {
    this.loginService.checkSession();
  }

  onLogin() {
    const username = this.loginForm.value.username
    const password = this.loginForm.value.password;
    this.loginService.sendCredential(username, password);
  }

  loggingError() {
    return this.loginService.loggingError();
  }

  onNewAccount() {
    this.user = new User();
    this.user = this.accountForm.value;
    this.userService.newUser(this.user);
  }

  onForgotPassword() {
    const email = this.forgotPasswordForm.value.recoverEmail;
    this.userService.retrievePassword(email);
  }

}
