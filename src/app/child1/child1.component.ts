import { Component, signal } from '@angular/core';
import { MysignalsService } from '../mysignals.service';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  title = "child1.component"
  
  constructor(private mySignal: MysignalsService){}
  count = this.mySignal.getCount();
}
