import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmincardComponent } from './admincard/admincard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { UsercardComponent } from './usercard/usercard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';

const routes: Routes = [
  {path:"",redirectTo:"userlogin",pathMatch:"full"},
  {path:"userlogin",component:UserloginComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"admincard",component:AdmincardComponent},
  {path:"adminuser",component:AdminuserComponent},
  {path:"usercard",component:UsercardComponent},
  {path:"registration",component:UserregistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
