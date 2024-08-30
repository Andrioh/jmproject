import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-index',
  templateUrl: './button-index.component.html',
  styleUrls: ['./button-index.component.css']
})
export class ButtonIndexComponent {
  @Input() title: string | undefined;
  @Input() about: string | undefined;
  @Input() svgPath: string | undefined;
}
