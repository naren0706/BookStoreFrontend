import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/CartServices/cart.service';
import { CustomerDetailsService } from 'src/app/services/CustomerService/customer-details.service';

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.scss'],
})
export class NewAddressComponent implements OnInit {
  newAddressForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerDetailsService
  ) {}
  ngOnInit(): void {
    this.newAddressForm = this.fb.group({
      fullName: ['', Validators.required],
      mobileNum: ['', Validators.required],
      address: ['', Validators.required],
      cityOrTown: ['', Validators.required],
      state: ['', Validators.required],
      typeId: [null, [Validators.required, Validators.pattern(/^[1-3]$/)]],
    });
  }
  addAddress() {
    this.newAddressForm.value.typeId = +this.newAddressForm.value.typeId;
    console.log(this.newAddressForm.value);
    console.log(localStorage.getItem('token'));

    this.customerService
      .AddAddress(this.newAddressForm.value, localStorage.getItem('token'))
      .subscribe((res: any) => {
        console.log(res);
      });
    location.reload();
  }
}
