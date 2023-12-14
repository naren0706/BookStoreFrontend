import { TestBed } from '@angular/core/testing';

import { SummaryOrderService } from './summary-order.service';

describe('SummaryOrderService', () => {
  let service: SummaryOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummaryOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
