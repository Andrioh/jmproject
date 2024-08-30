// src/app/component/index/index.component.ts

import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { IndexComponentComponent } from "../../component/index-component/index-component.component";

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderComponent, IndexComponentComponent],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {}
