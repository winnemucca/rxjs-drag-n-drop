import { Injectable } from '@angular/core';

@Injectable()
export class DragNDropService {
  private zone: string;
  constructor() { }

  startDrag(zone: string) {
    this.zone = zone;
  }

  accepts(zone: string): boolean {
    return zone == this.zone;
  }

}
