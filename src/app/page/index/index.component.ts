import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
