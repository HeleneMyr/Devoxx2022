import { TestBed } from '@angular/core/testing';

import { ProgressBarVerticalService } from './progress-bar-vertical.service';

describe('ProgressBarVerticalService', () => {
  let service: ProgressBarVerticalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressBarVerticalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
