import { TestBed, inject } from '@angular/core/testing';

import { BookDataServiceService } from './book-data-service.service';

describe('BookDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookDataServiceService]
    });
  });

  it('should be created', inject([BookDataServiceService], (service: BookDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
