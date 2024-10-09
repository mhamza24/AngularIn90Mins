import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterValue=signal(0);
  increment(){
    this.counterValue.set(this.counterValue()+1)
  }
  decrement(){
    if(this.counterValue()==0)
    {
      return;
    }
    
    this.counterValue.set(this.counterValue()-1)
  }
  reset(){
    this.counterValue.set(0)
  }
}
