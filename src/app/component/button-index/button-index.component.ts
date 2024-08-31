import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-index',
  templateUrl: './button-index.component.html',
  styleUrls: ['./button-index.component.css']
})
export class ButtonIndexComponent {
  @Input() title: string | undefined;
  @Input() about: string | undefined;
  @Input() svgPath: string | undefined;

  constructor(private route:Router){}

  @Input() buttonurl: string | undefined;

  navigate(): void{
    if (this.buttonurl){
      this.route.navigate([this.buttonurl])
    }
  }
}
