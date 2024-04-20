import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { AddhomeserviceComponent } from './addhomeservice/addhomeservice.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { CommanddetailsComponent } from './commanddetails/commanddetails.component';
import { CommandetousComponent } from './commandetous/commandetous.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { GetcommanduserComponent } from './getcommanduser/getcommanduser.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
    { path: 'CommandUser', component: GetcommanduserComponent },
        { path: 'contact', component: ContactComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'registerclient', component: RegisterClientComponent },
  { path: 'commanddetails/:id', component:  CommanddetailsComponent},
  { path: 'loginClient', component: LoginClientComponent },
  { path: 'Commandetous', component: CommandetousComponent },
  { path: 'ThankYou', component: ThankYouComponent },

  { path: 'service', component: ServiceComponent },
  { path: 'about', component: AboutComponent },

  { path: 'homeservice', component: AddhomeserviceComponent },
  // Route for '/employee'
  // Route for '/employee'
  { path: 'home', component: HomeComponent }, // Route for '/home'
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect root path to '/home'
  { path: '**', redirectTo: '/home' }// Redirect any other unknown paths to '/home'


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
