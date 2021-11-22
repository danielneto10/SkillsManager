import { TestBed } from '@angular/core/testing';

import { ValidatorNewUserService } from './validator-new-user.service';

describe('ValidatorNewUserService', () => {
  let service: ValidatorNewUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorNewUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
