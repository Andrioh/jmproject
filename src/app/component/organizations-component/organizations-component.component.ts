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
  HasCollaborate: boolean = false;

  StartOrganization() {
    this.HasOrganization = !this.HasOrganization;
    this.HasCollaborate = !this.HasCollaborate;
  }  

}
