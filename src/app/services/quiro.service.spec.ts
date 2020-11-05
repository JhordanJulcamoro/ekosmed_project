import { TestBed } from '@angular/core/testing';

import { QuiroService } from './quiro.service';

describe('QuiroService', () => {
  let service: QuiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
