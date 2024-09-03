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
import { last } from 'rxjs';


interface organization{
  id: number,
  name: string,
}

@Component({
  selector: 'app-organizations-component',
  standalone: true,
  imports: [CommonModule, HlmTableModule, BrnTableModule],
  templateUrl: './organizations-component.component.html',
  styleUrl: './organizations-component.component.css'
})

export class OrganizationsComponentComponent {

  organizations: organization[] = [
  ];

  HasOrganization: boolean = false;
  HasCollaborate: boolean = false;

  StartOrganization() {
    this.HasOrganization = !this.HasOrganization;
  }  

  NwOrganization() {
    if (this.organizations) {
      let lastId = this.organizations.reduce((maxId, org) => Math.max(maxId, org.id), 0);
      
      lastId += 1;
      
      const format = lastId < 10 ? `0${lastId}` : `${lastId}`;
      
      const newOrga = { id: lastId, name: `Organization ${format}` };
      
      this.organizations.push(newOrga)
    }
  }  

}
