import { Component, inject } from '@angular/core';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-book-page',
  standalone: false,
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.scss',
})
export class BookPageComponent{
  readonly globalService = inject(GlobalService);
  readonly books$ = this.globalService.books$;

  getPublishedYear(date: Date | string | null | undefined): string {
    if (date == null) {
      return '';
    }

    const parsedDate = new Date(date);
    return Number.isNaN(parsedDate.getTime()) ? '' : parsedDate.getFullYear().toString();
  }

}
