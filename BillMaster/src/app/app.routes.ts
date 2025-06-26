import { Routes } from '@angular/router'; 

export const routes: Routes = [
    {
        path: "", redirectTo: "login", pathMatch: 'full'
    },
    //LoadComponent to use as the lazy load the component  for its route 
    {
        path: "login", loadComponent:()=>import('./components/login/login.component').then((m)=>m.LogInComponent) 
    },
    {
        path: "signup", loadComponent:()=>import('./components/sign-up/sign-up.component').then((m)=>m.SignUpComponent) 
    },
    {
        path: "forgotpassword", loadComponent:()=>import('./components/forgot-password/forgot-password.component').then((m)=>m.ForgotPasswordComponent)
    },
    {
        path: 'reset-password/:email',loadComponent: () =>import('./components/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent),
    },
    {
        path: "dashboard", loadComponent:()=>import('./components/dashboard/dashboard.component').then((m)=>m.DashboardComponent) 
    }
];
