import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistBookComponent } from './wishlist-book.component';

describe('WishlistBookComponent', () => {
  let component: WishlistBookComponent;
  let fixture: ComponentFixture<WishlistBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistBookComponent]
    });
    fixture = TestBed.createComponent(WishlistBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
