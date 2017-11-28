import {Routes, RouterModule} from '@angular/router';
import {MyAccountComponent} from './my-account.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {path: 'myAccount', component: MyAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class MyAccountRoutingModule {}
