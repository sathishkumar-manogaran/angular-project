import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RegisterWithGroupComponent } from './register-with-group/register-with-group.component';
import { RegisterWithTwoWayComponent } from './register-with-two-way/register-with-two-way.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterWithGroupComponent,
    RegisterWithTwoWayComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
