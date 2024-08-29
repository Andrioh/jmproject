import { Component } from '@angular/core';
import { AccordionComponent } from './accordion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionComponent],
  template: `<jmproject-accordion/>`
})
export class AppComponent {
  title = 'jmproject';
}
