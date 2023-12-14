import { CustomerDetailsService } from 'src/app/services/CustomerService/customer-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  address: any;
  IsAddAddress: boolean = false;
  constructor(private customerDetailsService: CustomerDetailsService) {}
  ngOnInit(): void {
    this.customerDetailsService
      .GetAddress(localStorage.getItem('token'))
      .subscribe((res: any) => {
        console.log(res);
        this.address = res.data;
      });
  }
}
