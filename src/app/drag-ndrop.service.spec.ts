import { TestBed, inject } from '@angular/core/testing';

import { DragNDropService } from './drag-ndrop.service';

describe('DragNDropService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragNDropService]
    });
  });

  it('should ...', inject([DragNDropService], (service: DragNDropService) => {
    expect(service).toBeTruthy();
  }));
});
