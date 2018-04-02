
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ListCoursesComponent } from './list-courses.component';

@NgModule({
    imports: [
         BrowserModule
    ],
    declarations: [
        ListCoursesComponent,
    ],
    exports: [
        ListCoursesComponent,
    ]
})
export class ListCoursesModule {

}
