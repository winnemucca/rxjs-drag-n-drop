import {Directive, Input, Output, EventEmitter, HostListener} from '@angular/core';
import { DropTargetOptions } from './draggable-model';
import { DragNDropService } from './drag-ndrop.service'
@Directive({
  selector: '[appDropTarget]'
})
export class DropTargetDirective {
  private options: DropTargetOptions = {};


  constructor(private dragService: DragNDropService) { }

  @Input()
  set myDropTarget(options: DropTargetOptions) {
    if (options) {
      this.options = options;
    }
  }

  @Output('myDrop') drop = new EventEmitter()

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  onDragOver(event) {
    const { zone = 'zone'} = this.options;

    if(this.dragService.accepts(zone)) {
      event.preventDefault();
    }
  }

  @HostListener('drop', ['$event'])
  onDrop(event) {
    const data = JSON.parse(event.dataTransfer.getData('Text'));

    this.drop.next(data);
  }

}
