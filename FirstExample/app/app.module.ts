import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicineComponent } from './medicine/medicine.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,MedicineComponent]
})
export class AppModule { }
