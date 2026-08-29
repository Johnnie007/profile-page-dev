import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsPageComponent } from './book-details-page.component';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../models/book';

describe('BookDetailsPageComponent', () => {
  let component: BookDetailsPageComponent;
  let fixture: ComponentFixture<BookDetailsPageComponent>;
  const routeData: { book: Book | null } = { book: null };

  beforeEach(async () => {
    routeData.book = null;

    await TestBed.configureTestingModule({
      declarations: [BookDetailsPageComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { data: routeData } },
        },
      ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(BookDetailsPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should set book from the resolved route data', () => {
    routeData.book = {
      id: '1',
      title: 'A Book',
      category: 'Fiction',
      details: 'Book details',
      format: 'Paperback',
      price: '$10',
      inventory: 1,
      printToOrderLink: null,
      pdfVersion: null,
      pages: 100,
      cover: null,
      published: {
        isPublished: true,
        publishedDate: new Date('2030-01-01'),
      },
    };
    fixture.detectChanges();
    expect(component.book).toEqual(routeData.book);
  });

  it('should set book to null when route data has no book', () => {
    fixture.detectChanges();
    expect(component.book).toBeNull();
  });
});
