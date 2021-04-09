import { TestBed } from '@angular/core/testing';

import { DecativateGuard } from './decativate.guard';

describe('DecativateGuard', () => {
  let guard: DecativateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DecativateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
