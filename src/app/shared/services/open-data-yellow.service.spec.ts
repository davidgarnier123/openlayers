import { TestBed } from '@angular/core/testing';

import { OpenDataYellowService } from './open-data-yellow.service';

describe('OpenDataYellowService', () => {
  let service: OpenDataYellowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenDataYellowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
