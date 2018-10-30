import { RouterModule, Routes } from "@angular/router";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Graphics1Component } from "./graphics1/graphics1.component";
import { ObservablesComponent } from "./observables/observables.component";
import { ProgressComponent } from "./progress/progress.component";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { RxjsComponent } from "./rxjs/rxjs.component";


const pagesRoutes: Routes = [
    { 
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent , data: { title: 'Progress' }},
            { path: 'graphics1', component: Graphics1Component , data: { title: 'Graphics' }},
            { path: 'observables', component: ObservablesComponent , data: { title: 'Promises' }},
            { path: 'rxjs', component: RxjsComponent , data: { title: 'RxJS' }},
            { path: 'account-settings', component: AccountSettingsComponent , data: { title: 'Theme settings' }},
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
]

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );