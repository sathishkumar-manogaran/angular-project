import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    model: any = {};

  constructor(        private router: Router
) { 
    
  }

  ngOnInit() {
  }

      register() {

       console.log(this.model);
                        this.router.navigate(['/home']);

    }


}
