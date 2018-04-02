import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent  {

medicineList: Array<Medicine> = [{
 medicineName:'Crocin',
 price:30.00,
 unit:'10 Nos'
},
 {
   medicineName:'Digiene',
 price:40.00,
 unit:'10 Nos'
}
];


  constructor() { }

  

}
 export class Medicine{

    medicineName:string;
    price :number;
    unit:string;
 }