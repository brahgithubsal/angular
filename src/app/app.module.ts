import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { About2Component } from './about2/about2.component';
import { EmployeeService } from './employee.service';
import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AddhomeserviceComponent } from './addhomeservice/addhomeservice.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { environment } from './environment';
import { CookieModule } from 'ngx-cookie';
import { CommonModule } from '@angular/common';



import { ReactiveFormsModule } from '@angular/forms';
import { LoginClientComponent } from './login-client/login-client.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { CommanddetailsComponent } from './commanddetails/commanddetails.component';
import { CommandetousComponent } from './commandetous/commandetous.component';
import { GetcommanduserComponent } from './getcommanduser/getcommanduser.component';


@NgModule({
  declarations: [
    AppComponent,
    CommandetousComponent,
    AboutComponent,
    About2Component,
    EmployeeComponent,
    HomeComponent,
    ServiceComponent,
    GetcommanduserComponent,
    AddhomeserviceComponent,
    LoginComponent,
    RegisterComponent,
    LoginClientComponent,
    RegisterClientComponent,
    CommanddetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule ,
    FormsModule,
    CookieModule.forRoot(), // Add CookieModule here

    ReactiveFormsModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }