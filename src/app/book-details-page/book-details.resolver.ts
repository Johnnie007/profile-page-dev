import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { map } from 'rxjs';
import { Book } from '../models/book';
import { RestService } from '../rest-service/rest.service';

export const bookDetailsResolver: ResolveFn<Book | null> = (
  route: ActivatedRouteSnapshot
) => {
  const id = route.paramMap.get('id');
  if (!id) {
    return null;
  }
  return inject(RestService)
    .getBooks()
    .pipe(
      map(series => series.books.find(book => book.id === id) ?? null)
    );
};
