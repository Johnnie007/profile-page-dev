import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-details-page',
  standalone: false,
  templateUrl: './book-details-page.component.html',
  styleUrl: './book-details-page.component.scss',
})
export class BookDetailsPageComponent implements OnInit {
 
  private readonly route = inject(ActivatedRoute);

  book: Book | null = null;

  ngOnInit(): void {
    const resolvedBook = this.route.snapshot.data['book'] as Book | null;
    this.book = resolvedBook ?? null;
    console.log('selected book', this.book);
  }
}
