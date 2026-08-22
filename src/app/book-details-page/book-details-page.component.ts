import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Book } from '../models/book';
import { RestService } from '../rest-service/rest.service';

@Component({
  selector: 'app-book-details-page',
  standalone: false,
  templateUrl: './book-details-page.component.html',
  styleUrl: './book-details-page.component.scss',
})
export class BookDetailsPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly bookStore = inject(RestService);

  book: Book | null = null;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        map(params => params.get('id')),
        switchMap(id => {
          if (!id) {
            this.book = null;
            return [];
          }

          return this.bookStore.getBookById(id);
        })
      )
      .subscribe(book => {
        this.book = book ?? null;
        console.log('selected book', this.book);
      });
  }
}
