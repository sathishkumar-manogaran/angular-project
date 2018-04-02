import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { LoginService, User } from './app-service/login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'RNTBCI Groups';

  public user = new User('', '');
  public errorMsg = '';

  constructor(
    private _service: LoginService) { }

  login() {
    console.log("inside login");
    if (!this._service.login(this.user)) {
      this.errorMsg = 'Failed to login';
    }

  }

}