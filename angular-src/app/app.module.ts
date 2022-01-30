import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { AdmincardComponent } from './admincard/admincard.component';
import { UsercardComponent } from './usercard/usercard.component';
import { GreetingcardService } from './greetingcard.service';
import { AdminuserComponent } from './adminuser/adminuser.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    UserloginComponent,
    UserregistrationComponent,
    AdmincardComponent,
    UsercardComponent,
    AdminuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GreetingcardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
