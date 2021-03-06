import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "src/app/login/login.component";
import { RegisterComponent  } from "src/app/login/register.component";
import { NopagefoundComponent } from "src/app/shared/nopagefound/nopagefound.component";

const appRoutes:Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent },
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );