import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './components/customer.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'customer', component: CustomerComponent }
];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);