import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  HlmCaptionComponent,
  HlmTableComponent,
  HlmTableModule,
  HlmTdComponent,
  HlmThComponent,
  HlmTrowComponent,
} from '@spartan-ng/ui-table-helm';


@Component({
  selector: 'app-organizations-component',
  standalone: true,
  imports: [CommonModule, HlmTableModule],
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
