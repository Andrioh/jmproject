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
import { HlmSkeletonComponent } from '@spartan-ng/ui-skeleton-helm';
import { HlmTableModule, } from '@spartan-ng/ui-table-helm';
import { HlmTabsModule } from '@spartan-ng/ui-tabs-helm';
import { HeaderComponent } from '../../../../component/header/header.component';
import { HlmTTypographyModule } from '../../../../shared/sparta-ext/typograph..module';

@Component({
    selector: 'app-organization-list',
    standalone: true,
    imports: [
        CommonModule,
        HeaderComponent,
        HlmTTypographyModule,

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
    templateUrl: './organization-list.component.html',
    styleUrl: './organization-list.component.css',
    providers: [
        provideIcons({ lucideArrowLeft, lucideMoreHorizontal })
    ],
})
export class OrganizationListComponent {
}
