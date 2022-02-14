import { TestBed } from '@angular/core/testing';

import { RegisterNewBookService } from './register-new-book.service';

describe('RegisterNewBookService', () => {
  let service: RegisterNewBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterNewBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
