import { TestBed, inject } from '@angular/core/testing';

import { QuesansService } from './quesans.service';

describe('QuesansService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuesansService]
    });
  });

  it('should be created', inject([QuesansService], (service: QuesansService) => {
    expect(service).toBeTruthy();
  }));
});
