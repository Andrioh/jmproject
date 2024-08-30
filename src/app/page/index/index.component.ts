import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { ButtonIndexComponent } from "../../component/button-index/button-index.component";
import { IndexComponentComponent } from "../../component/index-component/index-component.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderComponent, ButtonIndexComponent, IndexComponentComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}
