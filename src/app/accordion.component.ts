import { Component } from '@angular/core';
import { BrnAccordionContentComponent } from '@spartan-ng/ui-accordion-brain';
import {
  HlmAccordionContentDirective,
  HlmAccordionDirective,
  HlmAccordionIconDirective,
  HlmAccordionItemDirective,
  HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { RouterModule } from '@angular/router';

@Component({
	selector: 'jmproject-accordion',
	standalone: true,
	imports: [
		BrnAccordionContentComponent,
		HlmAccordionDirective,
		HlmAccordionItemDirective,
		HlmAccordionTriggerDirective,
		HlmAccordionContentDirective,
		HlmAccordionIconDirective,
		HlmIconComponent,
        RouterModule
	],
	template: `<router-outlet></router-outlet>`,
})
export class AccordionComponent {}