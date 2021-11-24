import { TestBed } from '@angular/core/testing';

import { DetailsUserResolver } from './details-user.resolver';

describe('DetailsUserResolver', () => {
  let resolver: DetailsUserResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DetailsUserResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
