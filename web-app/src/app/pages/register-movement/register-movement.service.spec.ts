import { TestBed } from '@angular/core/testing';

import { RegisterMovementService } from './register-movement.service';

describe('RegisterMovementService', () => {
  let service: RegisterMovementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterMovementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
