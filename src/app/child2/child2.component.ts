import { Component } from '@angular/core';
import { MysignalsService } from '../mysignals.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  title = "child2.component"
  
  constructor(private mySignal: MysignalsService){}
  getDoubleCount(){
    return this.mySignal.getDoubleCount();
  }
}
