import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

var users = [
  new User('admin@abc.com','abc123'),
  new User('user@abc.com','abc456'),
    new User('admin','admin')
];

@Injectable()
export class LoginService {

  constructor(
    private _router: Router){}

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['Login']);
  }

  login(user){
    var authenticatedUser = users.find(u => u.email === user.email);
    console.log("inside login service");
    if (authenticatedUser){
      localStorage.setItem("user", authenticatedUser.email);
      this._router.navigate(['group']);      
      return true;
    }
    return false;

  }

   checkCredentials( ){
    if (localStorage.getItem("user") === null){
        this._router.navigate(['Login']);
    }
  } 
}
