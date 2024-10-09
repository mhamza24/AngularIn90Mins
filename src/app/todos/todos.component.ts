import { Component, OnInit, inject, signal } from '@angular/core';

import { FilerTodoPipe } from '../pipes/filer-todo.pipe';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Todo } from '../model/todo.type';
import { TodosListComponent } from '../component/todos-list/todos-list.component';
import { TodosService } from '../service/todos.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [NgIf, TodosListComponent, FormsModule,FilerTodoPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todoService = inject(TodosService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

  ngOnInit(): void {
    // console.log(this.todoService.todoList)
    // this.todoItems.set(this.todoService.todoList)

    this.todoService
      .getTodos()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }

  updateTodoToggeled(todoItems: Todo) {
    this.todoItems.update((todo) => {
      return todo.map((todo) => {
        if (todo.id === todoItems.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
}
