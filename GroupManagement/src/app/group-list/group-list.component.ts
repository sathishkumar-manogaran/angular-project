import { Component, OnInit } from '@angular/core';
import grouplist from '../grouplist';
import { Groups } from '../groups';
import { GroupListService } from '../app-service/group-list.service';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from "RxJS/Rx";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  groups = grouplist.groups;
  selectedGroup: Groups;

  constructor(private _service: GroupListService) { }

  ngOnInit() {
  }

  // getGroupDetails(group: Groups) {
  //   this.selectedGroup = group;
  // }

  getEmplGroupDetails(group: Groups) {
    this.selectedGroup = group;
    this._service.getEmpList(this.selectedGroup);
  }

}
