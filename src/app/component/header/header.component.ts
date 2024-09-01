import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideBell, lucideHelpCircle, lucideMenu, lucideMessageSquare } from '@ng-icons/lucide';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    standalone: true,
    imports: [
        CommonModule,
        HlmButtonModule,
        HlmIconModule
    ],
    providers: [
        provideIcons({ lucideMenu, lucideMessageSquare, lucideHelpCircle, lucideBell })
    ]
})
export class HeaderComponent { }
