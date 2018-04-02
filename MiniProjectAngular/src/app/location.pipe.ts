import { Injectable,Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class LocationPipe implements PipeTransform {

  transform(courses: any[],field:string, value: string): any[] {

    console.log("Field"+field);
    console.log("value"+value);
        if (!courses) {
            return [];
        }
        if (!field || !value) {
            return courses;
        }
        return courses.filter(courses => courses.location.toLowerCase().indexOf(value.toLowerCase()) !== -1);
        
      }

  

}
