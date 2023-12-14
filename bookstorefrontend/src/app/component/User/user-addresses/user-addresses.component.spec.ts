import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressesComponent } from './user-addresses.component';

describe('UserAddressesComponent', () => {
  let component: UserAddressesComponent;
  let fixture: ComponentFixture<UserAddressesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAddressesComponent]
    });
    fixture = TestBed.createComponent(UserAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
