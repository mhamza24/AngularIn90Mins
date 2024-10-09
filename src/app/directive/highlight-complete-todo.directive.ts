import {
  Directive,
  ElementRef,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';

@Directive({
  selector: '[appHighlightCompleteTodo]',
  standalone: true,
})
export class HighlightCompleteTodoDirective {
  isTodoCompleted = input(false);
  el = inject(ElementRef);

  stylesEffect = effect(() => {
    if (this.isTodoCompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = '#d3f9d8';
      this.el.nativeElement.style.color = '#6c757d';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = '#fff';
      this.el.nativeElement.style.color = '#000';
    }
  });
}
