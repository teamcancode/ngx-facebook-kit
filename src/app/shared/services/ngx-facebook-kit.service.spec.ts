import { TestBed, inject } from '@angular/core/testing';

import { NgxFacebookKitService } from './ngx-facebook-kit.service';

describe('NgxFacebookKitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxFacebookKitService]
    });
  });

  it('should be created', inject([NgxFacebookKitService], (service: NgxFacebookKitService) => {
    expect(service).toBeTruthy();
  }));
});
