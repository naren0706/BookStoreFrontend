import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldOrderBooksComponent } from './old-order-books.component';

describe('OldOrderBooksComponent', () => {
  let component: OldOrderBooksComponent;
  let fixture: ComponentFixture<OldOrderBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldOrderBooksComponent]
    });
    fixture = TestBed.createComponent(OldOrderBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
