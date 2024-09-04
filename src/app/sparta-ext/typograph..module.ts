import { NgModule } from '@angular/core';
import { HlmBlockquoteDirective, HlmCodeDirective, HlmH1Directive, HlmH2Directive, HlmH3Directive, HlmH4Directive, HlmLargeDirective, HlmLeadDirective, HlmMutedDirective, HlmPDirective, HlmSmallDirective, HlmUlDirective } from '@spartan-ng/ui-typography-helm';

export const HlmTTypographyImports = [
	HlmBlockquoteDirective,
	HlmCodeDirective,
	HlmH1Directive,
	HlmH2Directive,
	HlmH3Directive,
	HlmH4Directive,
	HlmLargeDirective,
	HlmLeadDirective,
	HlmMutedDirective,
	HlmPDirective,
	HlmSmallDirective,
	HlmUlDirective,
] as const;

@NgModule({
	imports: [...HlmTTypographyImports],
	exports: [...HlmTTypographyImports],
})
export class HlmTTypographyModule {}
