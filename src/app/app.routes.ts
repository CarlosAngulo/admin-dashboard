import { Routes, RouterModule } from "@angular/router";

import { PagesComponent } from "src/app/pages/pages.component";
import { DashboardComponent } from "src/app/pages/dashboard/dashboard.component";
import { LoginComponent } from "src/app/login/login.component";
import { RegisterComponent  } from "src/app/login/register.component";
import { ProgressComponent } from "src/app/pages/progress/progress.component";
import { Graphics1Component } from "src/app/pages/graphics1/graphics1.component";
import { NopagefoundComponent } from "src/app/shared/nopagefound/nopagefound.component";

const appRoutes:Routes = [
    { 
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graphics1', component: Graphics1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true} );