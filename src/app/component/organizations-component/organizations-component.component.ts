import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideArrowLeft } from '@ng-icons/lucide';
import { HlmButtonDirective, HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmTableModule, } from '@spartan-ng/ui-table-helm';
import { HeaderService } from '../../Service/header.service';
import { HlmTTypographyModule } from '../../sparta-ext/typograph..module';
import { HeaderComponent } from '../header/header.component';



interface organization {
    id: number,
    name: string,
}

@Component({
    selector: 'app-organizations-component',
    standalone: true,
    imports: [
        CommonModule,
        HeaderComponent,

        //Spartan
        HlmTTypographyModule,
        HlmTableModule,
        HlmButtonModule,
        HlmIconModule,
        HlmLabelDirective,
        HlmButtonDirective
    ],
    providers: [provideIcons({ lucideArrowLeft })],
    templateUrl: './organizations-component.component.html',
    styleUrl: './organizations-component.component.css',
    host: {
        class: "flex flex-col flex-1"
    }
})

export class OrganizationsComponentComponent {

    constructor(private headerservice: HeaderService) { }

    organizations: organization[] = [];

    hasOrganization: boolean = false;

    create() {
        this.hasOrganization = !this.hasOrganization;
    }





    HasCollaborate: boolean = false;
    ColorBackground: string = "white";

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

    FinishEdit() {
        this.EditOrganization()
    }

}
