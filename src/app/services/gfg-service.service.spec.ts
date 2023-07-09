import { TestBed } from '@angular/core/testing';

import { GfgServiceService } from './gfg-service.service';

describe('GfgServiceService', () => {
  let service: GfgServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GfgServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
