import { Component } from '@angular/core';
import { ButtonIndexComponent } from "../button-index/button-index.component";

@Component({
  selector: 'app-index-component',
  standalone: true,
  imports: [ButtonIndexComponent],
  templateUrl: './index-component.component.html',
  styleUrl: './index-component.component.css'
})
export class IndexComponentComponent {

}
