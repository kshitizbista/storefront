import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models/user.model';
import {LoginService} from '../../../services/login.service';
import {UserService} from '../../../services/user.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  profileForm: FormGroup;
  loginError: boolean;
  loggedIn: boolean;
  user: User;
  subscription: Subscription;

  constructor(private loginService: LoginService, public userService: UserService) { }

  ngOnInit() {
   /*this.user = this.userService.getUser();
   console.log(this.user);*/
   console.log('hello');
   this.subscription = this.userService.userChanged.subscribe(
     (user: User) => {
       console.log('hello1');
       console.log(user);
     }
   );
    this.initForm();
  }

  onUpdateUserInfo() {
    console.log(this.profileForm);
    this.user = new User();
    this.userService.updateUserInfo(this.user);
  }

  initForm() {
  let id = 0;
  let firstName = '';
  let lastName = '';
  let username = '';
  let currentPassword = '';
  let newPassword = '';
  let email = '';
    this.profileForm = new FormGroup({
      'id' : new FormControl(id),
      'firstName': new FormControl(firstName),
      'lastName' : new FormControl(lastName),
      'username' : new FormControl(username, Validators.required),
      'currentPassword' : new FormControl(currentPassword, Validators.required),
      'newPassword' : new FormControl(newPassword, Validators.required),
      'email': new FormControl(email, Validators.required)
    });
  }

}
