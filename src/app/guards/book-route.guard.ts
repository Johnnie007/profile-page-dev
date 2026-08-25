import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GlobalService } from '../service/global.service';
import { catchError, map, of } from 'rxjs';

export const BookRouteGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const globalService = inject(GlobalService);

  const bookTitle = route.paramMap.get("bookTitle");
  const bookId = route.paramMap.get('id');
  const idAsNumber = Number(bookId);
  
  if(!bookTitle || isNaN(idAsNumber) || bookId == null){
    router.navigate(['/'])
    return false;
  }
  return globalService.validateBookDetailsRoute(bookTitle, bookId).pipe(
    map((isValid) => {
      console.log(isValid)
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
