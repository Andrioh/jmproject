import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrnTableModule } from '@spartan-ng/ui-table-brain';

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
  imports: [CommonModule, HlmTableModule, BrnTableModule],
  templateUrl: './organizations-component.component.html',
  styleUrl: './organizations-component.component.css'
})

export class OrganizationsComponentComponent {

  HasOrganization: boolean = true;
  HasCollaborate: boolean = true;

  StartOrganization() {
    this.HasOrganization = !this.HasOrganization;
    this.HasCollaborate = !this.HasCollaborate;
  }  

}
