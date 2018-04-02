import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-register-with-group',
  templateUrl: './register-with-group.component.html',
  styleUrls: ['./register-with-group.component.css']
})
export class RegisterWithGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log('Module Id'+module.id);
  }

    value: any;
  person = {
    firstname: 'Pascal',
    lastname: 'Precht',
    address: {
      street: 'thoughtram road 1',
      zip: '00000',
      city: 'Hanover'
    }
  };
  
  submit(form) {
    this.value = form; 
  }

}
