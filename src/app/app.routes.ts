import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './features/home/home.page';
import { OrganizationPage } from './features/organization/organization.page';

export const routes: Routes = [
    {path: '', component: HomePage },
    {path: 'organizations', component: OrganizationPage }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}