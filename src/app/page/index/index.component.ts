import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { ButtonIndexComponent } from "../../component/button-index/button-index.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderComponent, ButtonIndexComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
