import { TestBed } from '@angular/core/testing';

import { ListaUsersService } from './lista-users.service';

describe('ListaUsersService', () => {
  let service: ListaUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
