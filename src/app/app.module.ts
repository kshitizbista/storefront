import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import {CoreModule} from './component/core/core.module';
import { MyAccountComponent } from './component/my-account/my-account.component';
import {MyAccountModule} from './component/my-account/my-account.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import { MyProfileComponent } from './component/my-profile/my-profile.component';
import {MyProfileModule} from './component/my-profile/my-profile.module';
import { BannerComponent } from './shared/component/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    CoreModule,
    MyAccountModule,
    MyProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
