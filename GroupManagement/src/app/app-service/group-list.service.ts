import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Groups } from '../groups';

import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Injectable()
export class GroupListService {

    constructor(
        private _router: Router, private _employeeListComponent: EmployeeListComponent) { }

    // constructor(
    //     private _router: Router) { }

    getEmpList(group) {
        this._employeeListComponent.getGroupDetails(group);
        console.log('inside group service');
        //console.log(group);
       // this._empListService.getEmpListFromGroup(group);
    }

}