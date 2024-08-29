import { Component } from '@angular/core';
import { AccordionComponent } from './accordion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionComponent],
  host:{
    class: 'block p-10'
  },
  template: `<jmproject-accordion/>`
})
export class AppComponent {
  title = 'jmproject';
}
