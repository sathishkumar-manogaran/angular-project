import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupListComponent } from '../group-list/group-list.component';
import { AppComponent } from '../app.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { LoginComponent } from '../login/login.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

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
        path: 'group',
        component: GroupListComponent,
        children: [
            {
                path: 'emp-list',
                component: EmployeeListComponent,
                children: [
                    {
                        path: 'emp-detail',
                        component: EmployeeDetailsComponent
                    }
                ]
            }
        ]
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