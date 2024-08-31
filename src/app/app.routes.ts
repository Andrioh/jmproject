import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './page/index/index.component';
import { OrganizationsComponent } from './page/organizations/organizations.component';

export const routes: Routes = [
    {path: '', component: IndexComponent },
    {path: 'organizations', component: OrganizationsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}