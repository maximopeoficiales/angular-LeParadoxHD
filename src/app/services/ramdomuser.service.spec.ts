import { TestBed } from '@angular/core/testing';

import { RamdomuserService } from './ramdomuser.service';

describe('RamdomuserService', () => {
  let service: RamdomuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RamdomuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
