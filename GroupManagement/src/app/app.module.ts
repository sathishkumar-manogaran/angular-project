import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginService, User } from './app-service/login.service'
import { GroupListService } from './app-service/group-list.service';
import { EmployeeListService } from './app-service/employee-list.service';
import { Groups } from './groups';

import { AppComponent } from './app.component';
import { GroupListComponent } from './group-list/group-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupListComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent
  ],

  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule
  ],

  providers: [
    LoginService, 
    GroupListService,
    EmployeeListService,
    EmployeeListComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
