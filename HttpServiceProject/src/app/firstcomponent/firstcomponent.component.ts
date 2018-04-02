import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from "RxJS/Rx";

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {
  people: string[];
  http: Http;
  constructor(http: Http) {

    this.http = http;
    http.get('http://jsonplaceholder.typicode.com/users/')
      .map(res => res.json())
      .subscribe(people => this.people = people);
  }

  // getPeoples() {
  //   return this.http.get("http://jsonplaceholder.typicode.com/users/'")
  //       .map(response => response.json() as string[])
  //       .do(peoples=>this.people=peoples);

  // }





  ngOnInit() {
  }

}
                       //S  .map((res:Response) => res.json())
