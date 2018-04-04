import { TestBed, inject } from '@angular/core/testing';

import { FacebookKitService } from './facebook-kit.service';

describe('FacebookKitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacebookKitService]
    });
  });

  it('should be created', inject([FacebookKitService], (service: FacebookKitService) => {
    expect(service).toBeTruthy();
  }));
});
