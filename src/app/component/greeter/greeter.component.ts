import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeter',
  standalone: true,
  imports: [],
  templateUrl: './greeter.component.html',
  styleUrl: './greeter.component.scss'
})
export class GreeterComponent {
  message =input("Waiting for message ");
}
