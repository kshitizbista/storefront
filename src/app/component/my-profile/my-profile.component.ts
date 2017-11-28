import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  navLinks: [{label: string, path: string}]= [
    {label: 'Edit Profile', path: 'edit-profile'}
  ];

  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.getCurrentUser();
  }

  isDataFetched() {
    return this.userService.isDataFetched();
  }


}
