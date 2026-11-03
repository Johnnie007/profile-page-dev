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

  getPublishedYear(date: Date): string {
    return new Date(date).getFullYear().toString();
  }

}
