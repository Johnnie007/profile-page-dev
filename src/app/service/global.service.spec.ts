import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { GlobalService } from './global.service';
import { RestService } from '../rest-service/rest.service';
import { ClientData } from '../models/clientData';

describe('GlobalServiceService', () => {
  let service: GlobalService;
  let clientData: ClientData;

  beforeEach(() => {
    clientData = {
      userDetails: {
        id: 'user-1',
        firstName: 'Test',
        lastName: 'User',
        mainText: 'Main',
        subText: 'Sub',
      },
      projects: [],
      books: [
        {
          seriesId: 'series-1',
          id: '1',
          title: 'A Book: The Beginning',
          category: 'Fiction',
          details: 'Book details',
          format: 'Paperback',
          price: '$10',
          inventory: 1,
          printToOrder: null,
          pdf: null,
          numOfPages: 100,
          coverImage: null,
          publishData: {
            isPublished: true,
            publishedDate: new Date('2024-01-01'),
          },
        },
      ],
    };

    TestBed.configureTestingModule({
      providers: [
        {
          provide: RestService,
          useValue: { getClientDetails: () => of(clientData) },
        },
      ],
    });
    service = TestBed.inject(GlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should convert text to a URL-friendly string', () => {
    expect(service.convertUrlString('  A Book: The Beginning!  '))
      .toBe('a-book-the-beginning');
  });

  it('should return an empty string when converting missing text', () => {
    expect(service.convertUrlString('')).toBe('');
  });

  it('should return a book by ID', () => {
    let result;

    service.getBooksById('1').subscribe(book => result = book);

    expect(result).toEqual(clientData.books[0]);
  });

  it('should return null when a book ID is not found', () => {
    let result;

    service.getBooksById('missing').subscribe(book => result = book);

    expect(result).toBeNull();
  });

  it('should validate a book route using its slug and ID', () => {
    let result;

    service.validateBookDetailsRoute('a-book-the-beginning', '1')
      .subscribe(book => result = book);

    expect(result).toEqual(clientData.books[0]);
  });

  it('should return undefined for an invalid book route', () => {
    let result;

    service.validateBookDetailsRoute('wrong-title', '1')
      .subscribe(book => result = book);

    expect(result).toBeUndefined();
  });

  it('should expose each section of the client data', () => {
    let books;
    let projects;
    let userDetails;

    service.books$.subscribe(value => books = value);
    service.projects$.subscribe(value => projects = value);
    service.userDetails$.subscribe(value => userDetails = value);

    expect(books).toEqual(clientData.books);
    expect(projects).toEqual(clientData.projects);
    expect(userDetails).toEqual(clientData.userDetails);
  });
});
