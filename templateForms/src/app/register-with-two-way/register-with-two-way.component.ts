import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-with-two-way',
  templateUrl: './register-with-two-way.component.html',
  styleUrls: ['./register-with-two-way.component.css']
})
export class RegisterWithTwoWayComponent implements OnInit {

    public submitted: boolean = false;
  public user: User;

  constructor() { }

  ngOnInit() {

        this.user = {
      name: '',
        address: {
         street: '',
         postcode: '8000'
      }
    };
  }
  save(form: User, isValid: boolean) {
    this.submitted = true;
    console.log(form, isValid);
  }
  }




export interface User {
  name: string;
  address?: {
    street?: string;
    postcode?: string;
  }
}