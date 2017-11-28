import {NgModule} from '@angular/core';
import {MyAccountComponent} from './my-account.component';
import {CommonModule} from '@angular/common';
import {MyAccountRoutingModule} from './my-account-routing.module';
import {MatTabsModule} from '@angular/material';
import {CustomFormMaterialModule} from '../../shared/customModule/custom-form-material.module';
import {FormsModule} from '@angular/forms';
import {BannerModule} from '../../shared/component/banner/banner.module';

@NgModule({
  declarations: [
    MyAccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MyAccountRoutingModule,
    MatTabsModule,
    CustomFormMaterialModule,
    BannerModule
  ]
})

export class MyAccountModule {}
