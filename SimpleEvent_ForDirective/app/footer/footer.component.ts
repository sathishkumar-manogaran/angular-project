import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

    footer:Footer={
       designer:'Rakesh Systems Ltd',
       copyright:'Copy Right 2017-2020'
    };
  constructor() { }
 }
  export class Footer{
      designer:string;
      copyright:string;
  }