import { TestBed, inject } from '@angular/core/testing';

import { ShowDataService } from './show-data.service';

describe('ShowDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShowDataService]
    });
  });

  it('should be created', inject([ShowDataService], (service: ShowDataService) => {
    expect(service).toBeTruthy();
  }));
});
