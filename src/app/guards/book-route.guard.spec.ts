import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  convertToParamMap,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { firstValueFrom, Observable, of, throwError } from 'rxjs';

import { BookRouteGuard } from './book-route.guard';
import { GlobalService } from '../service/global.service';

describe('BookRouteGuard', () => {
  const executeGuard = (route: ActivatedRouteSnapshot) =>
    TestBed.runInInjectionContext(() =>
      BookRouteGuard(route, {} as RouterStateSnapshot)
    );
  let validationResult: Observable<unknown>;
  let navigations: unknown[][];

  beforeEach(() => {
    validationResult = of({ id: '1' });
    navigations = [];

    TestBed.configureTestingModule({
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: (commands: []) => {
              navigations.push(commands);
              return Promise.resolve(true);
            },
          },
        },
        {
          provide: GlobalService,
          useValue: {
            validateBookDetailsRoute: () => validationResult,
          },
        },
      ],
    });
  });

  function createRoute(bookTitle?: string, id?: string): ActivatedRouteSnapshot {
    return {
      paramMap: convertToParamMap({ bookTitle, id }),
    } as ActivatedRouteSnapshot;
  }

  it('should redirect and deny access when parameters are invalid', () => {
    const result = executeGuard(createRoute('book-title', 'not-a-number'));

    expect(result).toBe(false);
    expect(navigations).toEqual([['/']]);
  });

  it('should allow access when the book route is valid', async () => {
    const result = executeGuard(createRoute('book-title', '1'));

    expect(await firstValueFrom(result as Observable<boolean>)).toBe(true);
    expect(navigations).toEqual([]);
  });

  it('should redirect when the book route is invalid', async () => {
    validationResult = of(undefined);

    const result = executeGuard(createRoute('book-title', '1'));

    expect(await firstValueFrom(result as Observable<boolean>)).toBe(false);
    expect(navigations).toEqual([['/']]);
  });

  it('should redirect when validating the book route fails', async () => {
    validationResult = throwError(() => new Error('request failed'));

    const result = executeGuard(createRoute('book-title', '1'));

    expect(await firstValueFrom(result as Observable<boolean>)).toBe(false);
    expect(navigations).toEqual([['/']]);
  });
});
