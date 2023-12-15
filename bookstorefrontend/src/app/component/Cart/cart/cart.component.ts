import { CartDataService } from './../../../services/cartCountService/cart-data.service';
import { Router } from '@angular/router';
import { PlaceOrderService } from './../../../services/PlaceOrderService/place-order.service';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { CartService } from 'src/app/services/CartServices/cart.service';
import { CustomerDetailsService } from 'src/app/services/CustomerService/customer-details.service';
import { Subscription } from 'rxjs';
import { LoginComponent } from '../../User/login/login.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  panelOpenState = false;
  books: any;
  IsNewAddress: boolean = false;
  CustomerAddresses: any;
  SummaryArray: any;
  customerId: any;
  subscription!: Subscription;
  message: any;

  constructor(
    private cartService: CartService,
    private customerService: CustomerDetailsService,
    private placeOrderService: PlaceOrderService,
    private router: Router,
    private cartDataService: CartDataService
  ) {}
  ngOnInit(): void {
    this.getAllCart();
    this.getCustomerDetails();
  }
  getCustomerDetails() {
    this.customerService
      .GetAddress(localStorage.getItem('token'))
      .subscribe((res: any) => {
        console.log(res);
        this.CustomerAddresses = res.data;
      });
  }
  getAllCart() {
    this.cartService
      .GetAllCart(localStorage.getItem('token'))
      .subscribe((res: any) => {
        console.log('cart');
        console.log(res);
        this.books = res.data;
        console.log('datalen');

        console.log(res.data.length);
        this.cartDataService.changeMessage(res.data.length);
      });
  }
  toggle() {
    this.IsNewAddress = !this.IsNewAddress;
  }
  receiveMessage($event: any) {
    console.log($event);
    this.customerId = $event;
  }
  switchPanel(openPanel: MatExpansionPanel, closePanel: MatExpansionPanel) {
    openPanel.open();
    closePanel.close();
  }
  bookRemoved($event: any) {
    this.getAllCart();
  }
  placeOrder() {
    if (this.customerId == null) {
      alert('select the address');
    } else {
      let url = '?customerId=' + this.customerId;
      this.placeOrderService
        .placeOrder(url, localStorage.getItem('token'))
        .subscribe((res: any) => {
          console.log(res);
        });
    }
    this.router.navigateByUrl('dashboard/orderPlaced');
  }
}
