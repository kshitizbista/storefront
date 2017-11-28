import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../../app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {CustomFormMaterialModule} from '../../shared/customModule/custom-form-material.module';
import {LoginService} from '../../services/login.service';
import {UserService} from '../../services/user.service';
import {BannerModule} from '../../shared/component/banner/banner.module';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CustomFormMaterialModule,
    BannerModule
  ],
  exports: [
    AppRoutingModule,
    NavBarComponent
  ],
  providers: [
    LoginService,
    UserService
  ]
})

export class CoreModule {}
