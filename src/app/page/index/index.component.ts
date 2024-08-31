// src/app/component/index/index.component.ts

import { Component } from '@angular/core';
import { IndexComponentComponent } from "../../component/index-component/index-component.component";
import { HeaderComponentModule } from '../../component/header/header.module';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [HeaderComponentModule, IndexComponentComponent],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {}
