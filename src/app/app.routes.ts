import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

//For Routing
export const routes: Routes = [
    {
        path:'dashboard',
        component: DashboardComponent,
    },
    {
        path:'login',
        component:LoginComponent,
    },
];

//above is an configuration and tell which component should be displayed
//when particular link is called
