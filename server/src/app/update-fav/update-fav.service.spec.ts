import { TestBed, inject } from '@angular/core/testing';

import { UpdateFavService } from './update-fav.service';

describe('UpdateFavService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateFavService]
    });
  });

  it('should be created', inject([UpdateFavService], (service: UpdateFavService) => {
    expect(service).toBeTruthy();
  }));
});
