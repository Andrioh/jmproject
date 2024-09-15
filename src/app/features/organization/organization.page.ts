import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideArrowLeft, lucideMoreHorizontal } from '@ng-icons/lucide';
import { HlmBadgeModule } from '@spartan-ng/ui-badge-helm';
import { HlmButtonDirective, HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { BrnSheetContentDirective, BrnSheetTriggerDirective } from '@spartan-ng/ui-sheet-brain';
import { HlmSheetModule } from '@spartan-ng/ui-sheet-helm';
import { HlmSkeletonComponent } from '@spartan-ng/ui-skeleton-helm';
import { HlmTableModule } from '@spartan-ng/ui-table-helm';
import { HlmTabsModule } from '@spartan-ng/ui-tabs-helm';
import { catchError, Subscription, throwError } from 'rxjs';
import { HeaderComponent } from '../../component/header/header.component';
import { OrganizationsEndpoint } from '../../domain/organization/organization.endpoints';
import { Organization } from '../../domain/organization/organization.models';
import { HeaderService } from '../../shared/Service/header.service';
import { HlmTTypographyModule } from '../../shared/sparta-ext/typograph..module';
import { OrganizationEmptyComponent } from './components/organization-empty/organization-empty.component';

@Component({
	selector: 'app-organizations',
	standalone: true,
	imports: [
		//Feature
		OrganizationEmptyComponent,

		//App
		HeaderComponent,
		HlmTTypographyModule,

		//Angular
		CommonModule,

		//Spartan
		HlmSkeletonComponent,
		HlmTabsModule,
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
	templateUrl: './organization.page.html',
	styleUrl: './organization.page.css',
	providers: [
		provideIcons({ lucideArrowLeft, lucideMoreHorizontal })
	],
	host: {
		class: "relative flex flex-col flex-1"
	},

})
export class OrganizationPage implements OnInit {

	private organizationsEndpoint = inject(OrganizationsEndpoint);
	private headerservice = inject(HeaderService);

	protected state = "none";

	getOrganizationsSubscription!: Subscription;
	organizations: Organization[] = [];

	hasCollaborate: boolean = false;
	tabActivated: string = "general";

	ngOnInit() {
		this.state = "loading";
		this.getOrganizationsSubscription = this.organizationsEndpoint.getOrganizations()
			.pipe(
				catchError(x => {
					if (x.name === "HttpErrorResponse" && x.status == 404) {
						this.state = "error404";
					}
					else {
						this.state = "unexpectedError"
					}

					return throwError(() => x);
				})
			)
			.subscribe(x => {
				this.state = x.length === 0 ? "empty" : "content";
				this.organizations = x;
			});
	}

	ngOnDestroy() {
		this.getOrganizationsSubscription.unsubscribe();
	}

	create() {
		alert("abrir sheet!");
		let lastId = this.organizations.reduce((maxId, org) => Math.max(maxId, org.id), 0);

		lastId += 1;

		const format = lastId < 10 ? `0${lastId}` : `${lastId}`;

		const newOrga = { id: lastId, name: `Organization ${format}` };

		this.organizations.push(newOrga)
	}

	discard() {
		this.EditOrganization()
	}

	save() {
		this.EditOrganization()
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
}
