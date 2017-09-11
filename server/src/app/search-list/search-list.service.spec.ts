import { TestBed, inject } from '@angular/core/testing';

import { SearchListService } from './search-list.service';

describe('SearchListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchListService]
    });
  });

  it('should be created', inject([SearchListService], (service: SearchListService) => {
    expect(service).toBeTruthy();
  }));
});
