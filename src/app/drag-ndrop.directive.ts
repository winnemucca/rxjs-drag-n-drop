import {Directive, HostBinding, HostListener, Input} from '@angular/core';
import { IDraggableOptions } from './draggable-model';
// providers
import { DragNDropService } from './drag-ndrop.service';
@Directive({
  selector: '[appDragNDrop]'
})
export class DragNDropDirective {

  private options: IDraggableOptions = {};
  constructor(private dragService: DragNDropService) {

  }

  @HostBinding('draggable')
  get draggable() {
    return true;
  }

  @Input()
  set myDraggable(options: IDraggableOptions) {
    if (options) {
      this.options = options;
    }
  }


  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    const { zone = 'zone', data = {}} = this.options;

    this.dragService.startDrag(zone);
    event.dataTransfer.setData('Text', JSON.stringify(data));
  }
}
