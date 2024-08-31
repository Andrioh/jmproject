import { Component } from '@angular/core';
import { HeaderComponentModule } from "../../component/header/header.module";
import { OrganizationsComponentComponent } from "../../component/organizations-component/organizations-component.component";

@Component({
  selector: 'app-organizations',
  standalone: true,
  imports: [HeaderComponentModule, OrganizationsComponentComponent],
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.css'
})
export class OrganizationsComponent {

}
