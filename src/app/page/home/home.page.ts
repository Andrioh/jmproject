import { Component } from '@angular/core';
import { HlmCardModule } from '@spartan-ng/ui-card-helm';
import { provideIcons } from '@ng-icons/core';
import { lucideBuilding2, lucideKey, lucideRefreshCcw, lucideSettings, lucideShieldAlert } from '@ng-icons/lucide';
import { HlmIconModule } from '@spartan-ng/ui-icon-helm';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../component/header/header.component';
import { HeaderService } from '../../Service/header.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        HlmCardModule,
        HlmIconModule,
        RouterModule,
        HeaderComponent
    ],
    providers: [
        provideIcons({ lucideShieldAlert, lucideKey, lucideRefreshCcw, lucideSettings, lucideBuilding2 })
    ],
    templateUrl: './home.page.html',
    styleUrl: './home.page.css'
})
export class HomePage {

    constructor(private headerservice:HeaderService){}

    changeIcon() {
        this.headerservice.ModAlterIcon();
    }


}
