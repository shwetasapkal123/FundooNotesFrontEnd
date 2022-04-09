import { TestBed } from '@angular/core/testing';

import { GridListViewService } from './grid-list-view.service';

describe('GridListViewService', () => {
  let service: GridListViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridListViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
