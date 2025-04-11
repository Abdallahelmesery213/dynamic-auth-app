import { Routes } from '@angular/router';
import { LoginLogsComponent } from './features/auth/login-logs/login-logs.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegistrationComponent } from './features/auth/registration/registration.component';
import { UserGridComponent } from './features/user/user-grid/user-grid.component';

export const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', component: RegistrationComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logs', component: LoginLogsComponent },
    { path: 'dashboard', component: UserGridComponent },
];
