import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideBell, lucideHelpCircle, lucideMenu, lucideMessageSquare, lucideArrowLeft } from '@ng-icons/lucide';
import { HlmButtonModule } from '@spartan-ng/ui-button-helm';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { HeaderService } from '../../Service/header.service';
import { Router } from '@angular/router';

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
        provideIcons({ lucideMenu, lucideMessageSquare, lucideHelpCircle, lucideBell, lucideArrowLeft })
    ]
})
export class HeaderComponent implements OnInit {

    AlterIcon: boolean = false;
    BgColor: string = "white"

    constructor(private headerservice: HeaderService, private route: Router) { }

    ngOnInit(): void {
        this.headerservice.currentIconStatus.subscribe(status => {
            this.AlterIcon = status;
        });

        this.headerservice.CurrentBgColor.subscribe(color => {
            this.BgColor = color
        });
    }

    ModAlter() {
        this.headerservice.ModAlterIcon();
    }

    BackPage() {
        this.route.navigate(["/"])
        this.headerservice.ModAlterIcon();
    }


}
