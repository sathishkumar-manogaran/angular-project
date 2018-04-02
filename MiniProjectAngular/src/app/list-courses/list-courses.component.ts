import { Component } from '@angular/core';
import courseList from '../courses';

@Component({
    selector: 'list-courses',
    templateUrl: 'list-courses.component.html',
    styleUrls: ['list-courses.component.css']
})
export class ListCoursesComponent {

    courses = courseList.courses;


}
