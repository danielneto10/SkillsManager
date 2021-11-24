import { TestBed } from '@angular/core/testing';

import { ListaUsersResolver } from './lista-users.resolver';

describe('ListaUsersResolver', () => {
  let resolver: ListaUsersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListaUsersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
