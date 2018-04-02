import { Component, OnInit, Input } from '@angular/core';
import { Groups } from '../groups';
import { Employee } from '../employee';
import { Router } from '@angular/router';

import { EmployeeListService } from '../app-service/employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  groupDetail;
  employee: Employee;

  constructor( private _router: Router, private _empListService: EmployeeListService) {
  }

  ngOnInit() {
  }

  getGroupDetails(groupDetail: any) {
    // this._router.navigate(['group/emp-list']);
    this.groupDetail = groupDetail;
    console.log('Inside emp list component');
    console.log(this.groupDetail);
    
  }

  getEmployeeDetails(employee: Employee) {
    this.employee = employee;
    this._empListService.getEmployeeDetailFromGroup(employee);
  }


}
