import { Component, inject } from '@angular/core';
import { BookSeries } from '../models/book';
import { RestService } from '../rest-service/rest.service';
import { Observable } from 'rxjs';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-book-page',
  standalone: false,
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.scss',
})
export class BookPageComponent{
  public readonly globalService = inject(GlobalService);
  private readonly restService = inject(RestService);

  bookSeries$: Observable<BookSeries> = this.restService.getBooks();

  getPublishedYear(date: Date): string {
    return new Date(date).getFullYear().toString();
  }

}
