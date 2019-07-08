import { TestBed } from '@angular/core/testing';

import { FdupService } from './fdup.service';

describe('FdupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FdupService = TestBed.get(FdupService);
    expect(service).toBeTruthy();
  });
});
