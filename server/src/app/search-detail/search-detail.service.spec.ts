import { TestBed, inject } from '@angular/core/testing';

import { SearchDetailService } from './search-detail.service';

describe('SearchDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchDetailService]
    });
  });

  it('should be created', inject([SearchDetailService], (service: SearchDetailService) => {
    expect(service).toBeTruthy();
  }));
});
