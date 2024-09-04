import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HlmTableModule,} from '@spartan-ng/ui-table-helm';
import { HeaderComponent } from '../header/header.component';
import { HeaderService } from '../../Service/header.service';
import { provideIcons } from '@ng-icons/core';
import { lucideArrowLeft } from '@ng-icons/lucide';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';



interface organization {
  id: number,
  name: string,
}

@Component({
  selector: 'app-organizations-component',
  standalone: true,
  imports: [CommonModule, HlmTableModule, HeaderComponent, HlmButtonModule, HlmIconModule, HlmLabelDirective, HlmButtonDirective],
  providers: [provideIcons({lucideArrowLeft})],
  templateUrl: './organizations-component.component.html',
  styleUrl: './organizations-component.component.css'
})

export class OrganizationsComponentComponent {

  constructor(private headerservice:HeaderService){}

  organizations: organization[] = [];

  HasOrganization: boolean = false;
  HasCollaborate: boolean = false;
  ColorBackground: string = "white";
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

  EditOrga: boolean = false;

  EditOrganization() {

    if (this.EditOrga == false) {
      this.EditOrga = true
      this.ColorBackground = "#E5E7EB"
      this.headerservice.AlterColor()
    } else {
      this.EditOrga = false
      this.ColorBackground = "white"
      this.headerservice.AlterColor()
    }

  }

  FinishEdit(){
    this.EditOrganization()
  }

}
