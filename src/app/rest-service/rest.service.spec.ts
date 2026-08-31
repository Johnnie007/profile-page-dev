import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { RestService } from './rest.service';
import { BookSeries } from '../models/book';
import { Project } from '../models/projects';

describe('RestServiceService', () => {
  let service: RestService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClientTesting()],
    });
    service = TestBed.inject(RestService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return projects from the projects endpoint', () => {
    const projects: Project[] = [
      {
        id: '1',
        name: 'Profile Page',
        category: 'Web',
        yearDeployed: new Date('2024-01-01'),
        link: 'https://example.com',
        stack: ['Angular'],
        image: 'profile-page.png',
      },
    ];
    let result: Project[] | undefined;

    service.getProjects().subscribe(projectsValue => result = projectsValue);

    const request = httpTesting.expectOne('assets/public/projects.json');
    expect(request.request.method).toBe('GET');
    request.flush(projects);

    expect(result).toEqual(projects);
  });

  it('should return books from the books endpoint', () => {
    const bookSeries: BookSeries = {
      id: 'series-1',
      seriesName: 'Test Series',
      books: [],
    };
    let result: BookSeries | undefined;

    service.getBooks().subscribe(bookSeriesValue => result = bookSeriesValue);

    const request = httpTesting.expectOne('assets/public/books.json');
    expect(request.request.method).toBe('GET');
    request.flush(bookSeries);

    expect(result).toEqual(bookSeries);
  });
});
