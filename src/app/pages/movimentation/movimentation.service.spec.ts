import { TestBed } from '@angular/core/testing';

import { MovimentationService } from './movimentation.service';

describe('MovimentationService', () => {
  let service: MovimentationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimentationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
