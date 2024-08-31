import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private route:Router){}

  @Input() svgPath2: string = 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
  @Input() buttonurl2: string | undefined

  navigate(): void{
    if (this.buttonurl2){
      this.route.navigate([this.buttonurl2])
    }
  }
}
