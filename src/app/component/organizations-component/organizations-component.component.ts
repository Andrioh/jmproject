import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-organizations-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organizations-component.component.html',
  styleUrl: './organizations-component.component.css'
})
export class OrganizationsComponentComponent {

  HasOrganization: boolean = false;

  StartOrganization() {
    if (this.HasOrganization == false) {
      this.HasOrganization = true
    } else {
      this.HasOrganization = false
    }
  }

}
