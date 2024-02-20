import { TestBed } from '@angular/core/testing';

import { MysignalsService } from './mysignals.service';

describe('MysignalsService', () => {
  let service: MysignalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysignalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
