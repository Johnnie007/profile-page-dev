import { TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
import { ClientData } from '../models/clientData';
import { environment } from '../../environments/environment';

describe('RestServiceService', () => {
  let service: RestService;
  let httpTesting: HttpTestingController;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(RestService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the client data from the configured endpoint', () => {
    let result: ClientData | undefined;

    service.getClientDetails().subscribe(value => result = value);

    const request = httpTesting.expectOne(environment.clientUrl);
    expect(request.request.method).toBe('GET');
    request.flush(clientData);

    expect(result).toEqual(clientData);
  });
});
