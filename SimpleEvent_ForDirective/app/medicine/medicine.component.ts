import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  stockList=[100,200,300];

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

  ngOnInit() {
  }

showStock(event:any){
  let code = event.target.id;
  
  alert("Available Stock"+this.stockList[--code]);

  console.log("Available Stock"+this.stockList[--code]);

}
  

}
 export class Medicine{

    medicineName:string;
    price :number;
    unit:string;
 }