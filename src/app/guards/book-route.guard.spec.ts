import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { BookRouteGuard } from './book-route.guard';

describe('bookRouteGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => BookRouteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
