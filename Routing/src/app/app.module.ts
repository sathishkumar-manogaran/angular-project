import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import { AboutRoutingModule,routingComponents } from './about/about-routing.module';
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,routingComponents
      ],
  imports: [
    BrowserModule,HttpModule,AboutRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
