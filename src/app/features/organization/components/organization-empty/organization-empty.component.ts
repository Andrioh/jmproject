import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
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
    selector: 'app-organization-empty',
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
    templateUrl: './organization-empty.component.html',
    styleUrl: './organization-empty.component.css',
    host: {
        class: "flex grow p-8 flex-col gap-2 items-center justify-center"
    }
})
export class OrganizationEmptyComponent {
    @Output() byClickButton = new EventEmitter();
}
