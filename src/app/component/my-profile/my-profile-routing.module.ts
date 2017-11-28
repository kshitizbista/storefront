import {RouterModule, Routes} from '@angular/router';
import {MyProfileComponent} from './my-profile.component';
import {NgModule} from '@angular/core';
import {EditProfileComponent} from './edit-profile/edit-profile.component';

const appRoutes: Routes = [
  {path: 'myProfile', component: MyProfileComponent, children: [
    {path: 'edit-profile', component: EditProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})

export class MyProfileRoutingModule { }
