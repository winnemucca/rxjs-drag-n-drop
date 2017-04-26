import { Directive,EventEmitter, HostListener, Output  } from '@angular/core';

import { Observable } from 'rxjs/Rx';
@Directive({
  selector: '[appRxDirective]'
})
export class RxDirectiveDirective {

  constructor() {
    this.mousedrag = this.mousedown.map((event) => {
      this.dragActive = true;
      return { x: event.clientX, y: event.clientY };
    }).flatMap(mouseDownPos => this.mousemove.map(pos => {
      return { x: pos.clientX - mouseDownPos.x, y: pos.clientY - mouseDownPos.y };
    }).takeUntil(this.dragend));
  }

  @Output() mousedrag: Observable<{x:number, y:number}>
  @Output() dragend = new EventEmitter<void>();
  mousedown = new EventEmitter<MouseEvent>();
  mousemove = new EventEmitter<MouseEvent>();
  dragActive = false;

  @HostListener('document:mouseup', ['$event'])
  onMouseup(event) {
    if(this.dragActive) {
      this.dragend.emit(null);
      this.dragActive = false;
    }
  }

  @HostListener('mousedown', ['$event'])
  onMousedown(event: MouseEvent) {
    this.mousedown.emit(event);
  }

  @HostListener('document:mousemove', ['$event'])
  onMousemove(event: MouseEvent) {
    if(this.dragActive) {
      this.mousemove.emit(event);
      return false;
    }
  }
}
