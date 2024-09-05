import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideArrowLeft, lucideMoreHorizontal } from '@ng-icons/lucide';
import { HlmBadgeModule } from '@spartan-ng/ui-badge-helm';
import { HlmButtonDirective, HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/ui-sheet-brain';
import { HlmSheetModule } from '@spartan-ng/ui-sheet-helm';
import { HlmTableModule, } from '@spartan-ng/ui-table-helm';
import { HeaderService } from '../../Service/header.service';
import { HlmTTypographyModule } from '../../sparta-ext/typograph..module';
import { HeaderComponent } from '../header/header.component';

export interface organization {
    id: number,
    name: string,
}

@Component({
    selector: 'app-organizations-component',
    standalone: true,
    imports: [
        CommonModule,
        HeaderComponent,
        HlmTTypographyModule,

        //Spartan 
        BrnSheetTriggerDirective,
        BrnSheetContentDirective,
        HlmSheetModule,
        HlmBadgeModule,
        HlmTableModule,
        HlmButtonModule,
        HlmIconModule,
        HlmLabelDirective,
        HlmButtonDirective
    ],
    templateUrl: './organizations-component.component.html',
    styleUrl: './organizations-component.component.css',
    providers: [
        provideIcons({ lucideArrowLeft, lucideMoreHorizontal })
    ],
    host: {
        class: "flex flex-col flex-1"
    }
})
export class OrganizationsComponentComponent {

    constructor(private headerservice: HeaderService) { }

    organizations: organization[] = [];

    hasOrganization: boolean = true;
    hasCollaborate: boolean = false;

    create() {
        if (!this.hasOrganization) {
            this.hasOrganization = !this.hasOrganization;
        }

        let lastId = this.organizations.reduce((maxId, org) => Math.max(maxId, org.id), 0);

        lastId += 1;

        const format = lastId < 10 ? `0${lastId}` : `${lastId}`;

        const newOrga = { id: lastId, name: `Organization ${format}` };

        this.organizations.push(newOrga)
    }





    HasCollaborate: boolean = false;
    ColorBackground: string = "white";

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

    FinishEdit() {
        this.EditOrganization()
    }

}
