import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Todo } from '../model/todo.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  http = inject(HttpClient);
  todoList: Array<Todo> = [
    {
      title: 'DSA',
      id: 0,
      userId: 1,
      completed: false,
    },
    {
      title: 'DEV',
      id: 1,
      userId: 1,
      completed: false,
    },
    { title: 'Book Reading', id: 2, userId: 1, completed: false },
  ];

  constructor() {}

  getTodos() {
    return this.http.get<Array<Todo>>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
