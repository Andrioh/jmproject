import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'jmproject';
}
