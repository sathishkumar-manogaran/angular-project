import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCoursesComponent} from '../list-courses/list-courses.component';
import {LoginComponent} from '../login/login.component';
import {WelcomeComponent} from '../welcome/welcome.component';
import { CalenderComponent } from '../calender/calender.component';
import { StudentregistrationComponent } from '../studentregistration/studentregistration.component'
import { RegisterComponent } from '../register/register.component'

const routes: Routes = [
    {
       path: '', 
       redirectTo: 'login',
       pathMatch: 'full'
    },
    { 
        path: 'login',  
        component: LoginComponent 
    },
    {
        path:'register',
        component:RegisterComponent
    },
    { 
        path: 'home',  
        component: WelcomeComponent
    },
    {
        path: 'calendar', 
    component: CalenderComponent
},
    {
        path: 'studreg', 
    component: StudentregistrationComponent
},
    
    {
        path: 'courses', 
        component: ListCoursesComponent
    
}
    

    ];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [

     ]
})
export class AppRoutingModule { }



    //         children: [
    //   {path: '', redirectTo: 'calendar',pathMatch: 'full'},
    //   {path: 'calendar', component: CalenderComponent},
    //   {path: 'courses', component: ListCoursesComponent},