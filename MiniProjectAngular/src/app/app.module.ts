import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {RouterModule,Routes} from '@angular/router'

import { AppComponent } from './app.component';
import {ListCoursesModule} from './list-courses/list-courses.module';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {AuthenticationService} from './login.service';
import {FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CalenderComponent } from './calender/calender.component';
import { LocationPipe } from './location.pipe';
import { OrderbyPipe } from './orderby.pipe';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { RegisterComponent } from './register/register.component';

import { DisplaycoursesComponent } from './displaycourses/displaycourses.component'


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    CalenderComponent,
    LocationPipe,
    OrderbyPipe,
    StudentregistrationComponent,
    RegisterComponent,
      DisplaycoursesComponent
  ],
  imports: [
    BrowserModule,ListCoursesModule,    AppRoutingModule,FormsModule

  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
