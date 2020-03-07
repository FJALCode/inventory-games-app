import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
    // { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard] },
    { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
    { path: 'login', component : LoginComponent},
    { path: 'signup', component : SignupComponent},
    { path: 'error', component : ServerErrorComponent},
    { path: 'access-denied', component : AccessDeniedComponent},
    { path: 'not-found', component : NotFoundComponent},
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
