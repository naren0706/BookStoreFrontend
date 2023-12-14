import { CustomerDetailsService } from './../../../services/CustomerService/customer-details.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.scss'],
})
export class CustomerAddressComponent implements OnInit {
  IsEdit: boolean = false;
  @Input() address: any;
  @Output() messageEvent = new EventEmitter<string>();
  addressValue: any;
  cityOrTownValue: any;
  state: any;
  Name: any;
  MobileNum: any;
  constructor(private customerDetailsService: CustomerDetailsService) {}
  ngOnInit(): void {}
  emmitValue(a: any) {
    this.messageEvent.emit(a);
  }
  SetAddressValue($event: any) {
    this.addressValue = $event.target.value;
  }
  SetCityOrTownValue($event: any) {
    this.cityOrTownValue = $event.target.value;
  }
  SetStateValue($event: any) {
    this.state = $event.target.value;
  }
  SetName($event: any) {
    this.Name = $event.target.value;
  }
  SetMobileNum($event: any) {
    this.MobileNum = $event.target.value;
  }
  UpdateAddress() {
    console.log('B4');
    console.log(this.address);

    this.address.fullName =
      this.Name === undefined ? this.address.fullName : this.Name;
    this.address.mobileNum =
      this.MobileNum == undefined ? this.address.mobileNum : this.MobileNum;
    this.address.address =
      this.addressValue == undefined ? this.address.address : this.addressValue;
    this.address.cityOrTown =
      this.cityOrTownValue == undefined
        ? this.address.cityOrTown
        : this.cityOrTownValue;
    this.address.state =
      this.state == undefined ? this.address.state : this.MobileNum;
    console.log('after');

    console.log(this.address);
    this.customerDetailsService
      .UpdateAddress(this.address, localStorage.getItem('token'))
      .subscribe((res: any) => {
        console.log(res);
      });
      this.IsEdit=false;
  }
}
