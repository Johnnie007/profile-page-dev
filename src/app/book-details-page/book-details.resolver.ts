import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Book } from '../models/book';
import { GlobalService } from '../service/global.service';

export const BookDetailsResolver: ResolveFn<Book | null> = (
  route: ActivatedRouteSnapshot
) => {
  const globalService = inject(GlobalService);
  const id = route.paramMap.get('id');
  if (!id) {
    return null;
  }
  return globalService.getBooksById(id);
};
