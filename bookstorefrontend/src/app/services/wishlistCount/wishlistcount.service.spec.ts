import { TestBed } from '@angular/core/testing';

import { WishlistcountService } from './wishlistcount.service';

describe('WishlistcountService', () => {
  let service: WishlistcountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlistcountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
