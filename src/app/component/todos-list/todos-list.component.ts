import { Component, input, output } from '@angular/core';

import { HighlightCompleteTodoDirective } from '../../directive/highlight-complete-todo.directive';
import { Todo } from '../../model/todo.type';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [HighlightCompleteTodoDirective,UpperCasePipe],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
})
export class TodosListComponent {
  todo = input.required<Todo>();
  todoToggeled = output<Todo>();

  todoClicked() {
    this.todoToggeled.emit(this.todo());
  }
}
