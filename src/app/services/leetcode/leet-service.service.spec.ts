import { TestBed } from '@angular/core/testing';

import { LeetServiceService } from './leet-service.service';

describe('LeetServiceService', () => {
  let service: LeetServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeetServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
