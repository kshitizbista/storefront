import {NgModule} from '@angular/core';
import {MyProfileComponent} from './my-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {BannerModule} from '../../shared/component/banner/banner.module';
import {MyProfileRoutingModule} from './my-profile-routing.module';
import {MatProgressSpinnerModule, MatTabsModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomFormMaterialModule} from '../../shared/customModule/custom-form-material.module';


@NgModule({
  declarations: [
    MyProfileComponent,
    EditProfileComponent,
  ],
  imports: [
    CommonModule,
    BannerModule,
    MyProfileRoutingModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    CustomFormMaterialModule
  ],
  exports: [
  ]
})

export  class MyProfileModule { }
