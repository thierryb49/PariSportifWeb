import { TestBed } from '@angular/core/testing';

import { RencontresService } from './rencontres.service';

describe('RencontresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RencontresService = TestBed.get(RencontresService);
    expect(service).toBeTruthy();
  });
});
