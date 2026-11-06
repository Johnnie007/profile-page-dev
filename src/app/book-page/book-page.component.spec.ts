import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BookPageComponent } from './book-page.component';
import { RestService } from '../rest-service/rest.service';
import { ClientData } from '../models/clientData';

describe('BookPageComponent', () => {
  let component: BookPageComponent;
  let fixture: ComponentFixture<BookPageComponent>;
  const clientData: ClientData = {
    userDetails: {
      id: 'user-1',
      firstName: 'Test',
      lastName: 'User',
      mainText: 'Main',
      subText: 'Sub',
    },
    projects: [],
    books: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookPageComponent],
      providers: [
        { provide: RestService, useValue: { getClientDetails: () => of(clientData) } },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should expose the books from the client data', () => {
    let result;
    component.books$.subscribe(books => result = books);

    expect(result).toEqual(clientData.books);
  });

  it('should return year only from Date', ()=>{
    const date = new Date('10-10-2010');
    const yearFromDate = component.getPublishedYear(date);

    expect(yearFromDate).toBe('2010')
  });

  it('should not return a year when the published date is null', () => {
    expect(component.getPublishedYear(null)).toBe('');
  });
});
