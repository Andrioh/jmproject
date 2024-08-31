import { Component } from '@angular/core';
import { ButtonIndexModule } from '../button-index/button-index.module';

@Component({
  selector: 'app-index-component',
  standalone: true,
  imports: [ButtonIndexModule], 
  templateUrl: './index-component.component.html',
  styleUrls: ['./index-component.component.css']
})
export class IndexComponentComponent {}
