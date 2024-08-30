// src/app/component/index-component/index-component.component.ts

import { Component } from '@angular/core';
import { ButtonIndexModule } from '../button-index/button-index.module'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-index-component',
  standalone: true,
  imports: [ButtonIndexModule], // Importa o módulo que contém o ButtonIndexComponent
  templateUrl: './index-component.component.html',
  styleUrls: ['./index-component.component.css']
})
export class IndexComponentComponent {}
