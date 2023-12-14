import { Component, Input, OnInit } from '@angular/core';
import { CustomerDetailsService } from 'src/app/services/CustomerService/customer-details.service';

@Component({
  selector: 'app-user-addresses',
  templateUrl: './user-addresses.component.html',
  styleUrls: ['./user-addresses.component.scss'],
})
export class UserAddressesComponent implements OnInit {
  constructor(private customerDetailsService: CustomerDetailsService) {}
  ngOnInit(): void {
    console.log(this.address);
  }
  @Input() address: any;
  IsEdit: boolean = false;
  addressValue: any;
  cityOrTownValue: any;
  state: any;
  Name: any;
  MobileNum: any;
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
    this.IsEdit = false;
  }
}
