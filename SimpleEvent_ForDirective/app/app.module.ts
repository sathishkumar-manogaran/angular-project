import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MedicineComponent } from './medicine/medicine.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MedicineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,FooterComponent,MedicineComponent]
})
export class AppModule { }
