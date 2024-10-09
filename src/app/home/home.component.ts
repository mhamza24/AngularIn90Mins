import { Component, signal } from '@angular/core';

import { CounterComponent } from '../component/counter/counter.component';
import { GreeterComponent } from '../component/greeter/greeter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreeterComponent,CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  message=signal("Message passing from Parent to child")


  keyupHandler(event:KeyboardEvent)
  {
    
    console.log(`${event.key} is pressed !`)
  }
}
