import { Component } from '@angular/core';
import { OrganizationsComponentComponent } from "../../component/organizations-component/organizations-component.component";
import { HeaderComponent } from '../../component/header/header.component';

@Component({
  selector: 'app-organizations',
  standalone: true,
  imports: [OrganizationsComponentComponent, HeaderComponent],
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.css'
})
export class OrganizationsComponent {

}
