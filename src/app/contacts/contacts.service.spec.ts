import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { ContactsService } from './contacts.service';

describe('ContactsService', () => {
  let baseApiUrl = 'https://randomuser.me/api/';
  let service: ContactsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ContactsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should receive data with seed and results', () => {
    // Mock data to match the structure of the data that the service should receive
    const mockResponse = {
      results: [
        {
        },
      ],
      info: {
        seed: 'nuvalence',
        results: 1,
        page: 1,
        version: '1.4',
      },
    };

    // Assuming your service has a method called 'fetchData' to make the HTTP request.
    service.getUserData(1,1).subscribe((data) => {
      expect(data.info.seed).toBe('nuvalence'); // Check the 'seed' value
      expect(data.results.length).toBeGreaterThan(0); // Check if 'results' array has data
    });

    // Expecting a call to the specified URL and respond with mock data
    const req = httpMock.expectOne(`${baseApiUrl}?page=1&results=1&seed=nuvalence`); // Change to match your API's URL
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
