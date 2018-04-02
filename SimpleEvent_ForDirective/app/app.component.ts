import { Component,ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  maintitle = 'Medplus Pharmacy Limited';
  pincode :string;
  logo='assets/images/logo.jpg'

  constructor(elementRef : ElementRef){
        
          this.pincode=elementRef.nativeElement.getAttribute('pincode');
  }
}
