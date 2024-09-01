import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationsComponent } from './page/organizations/organizations.component';
import { HomePage } from './page/home/home.page';

export const routes: Routes = [
    {path: '', component: HomePage },
    {path: 'organizations', component: OrganizationsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}