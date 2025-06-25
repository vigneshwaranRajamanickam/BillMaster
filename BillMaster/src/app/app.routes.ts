import { Routes } from '@angular/router';
// import { SignInComponent } from './components/sign-in/sign-in.component';
// import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
    {
        path: "", redirectTo: "login", pathMatch: 'full'
    },
    //LoadComponent to use as the lazy load the component  for its route 
    {
        path: "login", loadComponent:()=>import('./components/sign-in/sign-in.component').then((m)=>m.SignInComponent) 
    },
    {
        path: "signup", loadComponent:()=>import('./components/sign-up/sign-up.component').then((m)=>m.SignUpComponent) 
    },
    {
        path: "dashboard", loadComponent:()=>import('./components/dashboard/dashboard.component').then((m)=>m.DashboardComponent) 
    }
];
