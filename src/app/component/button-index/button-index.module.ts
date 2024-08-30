// src/app/component/button-index/button-index.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonIndexComponent } from './button-index.component';

@NgModule({
  declarations: [ButtonIndexComponent],
  imports: [CommonModule],
  exports: [ButtonIndexComponent] // Exporta o componente para uso em outros módulos
})
export class ButtonIndexModule {}
