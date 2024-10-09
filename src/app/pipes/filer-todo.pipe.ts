import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from '../model/todo.type';

@Pipe({
  name: 'filerTodo',
  standalone: true,
})
export class FilerTodoPipe implements PipeTransform {
  transform(todos: Todo[], searchTerm: string): Todo[] {
    if (!searchTerm) {
      return todos;
    }
    const textToBeSearch = searchTerm.toLowerCase();
    return todos.filter((todo) => {
      return todo.title.toLowerCase().includes(textToBeSearch);
    });
  }
}
