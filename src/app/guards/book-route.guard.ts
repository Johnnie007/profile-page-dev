import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GlobalService } from '../service/global.service';
import { catchError, map, of } from 'rxjs';

const UUID_PATTERN = /^[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;

export const BookRouteGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const globalService = inject(GlobalService);

  const bookTitle = route.paramMap.get("bookTitle");
  const bookId = route.paramMap.get('id');
  
  if (!bookTitle || !bookId || !UUID_PATTERN.test(bookId)) {
    router.navigate(['/'])
    return false;
  }
  return globalService.validateBookDetailsRoute(bookTitle, bookId).pipe(
    map((isValid) => {
      if(isValid) {
        return true;
      }else{
        router.navigate(['/']);
        return false;
      }
    }),
    catchError(() => {
      router.navigate(['/'])
      return of(false);
    })
  );
};
