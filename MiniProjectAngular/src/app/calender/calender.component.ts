import { Component, OnInit } from '@angular/core';
import { LocationPipe } from '../location.pipe'

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

     augCalendar= [
        {
            "name": "Angular",
            "duration": 25,
            "fees": 2400,
            "mode": "classRoom",
            "startDate": '12th Aug 2017',
            "location":"Gurugram"
            },
        {
          "name": "ReactJS",
            "duration": 35,
            "fees": 2400,
            "mode": "classRoom",
            "startDate": '12th Aug 2017',
            "location":"Chennai"
         
        },
        {
             "name": "Java 8",
            "duration": 15,
            "fees": 2400,
            "mode": "classRoom",
            "startDate": '12th Aug 2017',
            "location":"Chennai"
         
        },
        {
          "name": "Ember",
            "duration": 25,
            "fees": 2400,
            "mode": "classRoom",
            "startDate": '12th Aug 2017',
            "location":"Hyderabad"
         
        },
        {
          "name": "SOAP UI",
            "duration": 40,
            "fees": 2400,
            "mode": "classRoom",
            "startDate": '12th Aug 2017',
            "location":"Pune"
         
        },
        {
          "name": "Spring",
            "duration": 25,
            "fees": 2400,
            "mode": "classRoom",
            "startDate": '12th Aug 2017',
            "location":"Mumbai"
         
        }
    ]
}
