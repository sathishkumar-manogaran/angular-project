import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Groups } from '../groups';

@Injectable()
export class EmployeeListService {

    constructor(
        private _router: Router) { }

    getEmployeeDetailFromGroup(emp) {
        console.log('inside emp list service');
        console.log(emp);
        this._router.navigate(['group/emp-detail']);
        
    }
}