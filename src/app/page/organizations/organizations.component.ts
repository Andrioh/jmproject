import { Component } from '@angular/core';
import { HeaderComponentModule } from "../../component/header/header.module";

@Component({
  selector: 'app-organizations',
  standalone: true,
  imports: [HeaderComponentModule],
  templateUrl: './organizations.component.html',
  styleUrl: './organizations.component.css'
})
export class OrganizationsComponent {

}
