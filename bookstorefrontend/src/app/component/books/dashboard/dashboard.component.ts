import { CartService } from 'src/app/services/CartServices/cart.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataServices/data.service';
import { WishlistService } from 'src/app/services/wishlistService/wishlist.service';
import { CartDataService } from 'src/app/services/cartCountService/cart-data.service';
import { WishlistcountService } from 'src/app/services/wishlistCount/wishlistcount.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  filterstr: string = '';
  cartBooks!: any;
  wishListBooks!: any;
  wishlistCount: any = 0;
  cartCount: any = 0;

  constructor(
    private data: DataService,
    private router: Router,
    private cartService: CartService,
    private wishlistService: WishlistService,
    private cartDataService: CartDataService,
    private wishlistCountService: WishlistcountService
  ) {}
  ngOnInit() {
    this.getAllCart();
    this.getAllWishlist();
    this.cartDataService.getMessage().subscribe((res) => {
      this.getAllCart();
    });
    this.wishlistCountService.getMessage().subscribe((res) => {
      this.getAllWishlist();
    });
  }
  getAllCart() {
    this.cartService
      .GetAllCart(localStorage.getItem('token'))
      .subscribe((res: any) => {
        console.log('cart');
        console.log(res);
        this.cartBooks = res.data;
        this.cartCount = res.data.length;
        console.log(this.cartBooks);
      });
  }
  getAllWishlist() {
    this.wishlistService
      .GetAllWishList(localStorage.getItem('token'))
      .subscribe((res: any) => {
        console.log(res);
        this.wishListBooks = res.data;
        this.wishlistCount = res.data.length;
      });
  }
  searchNotes(event: any) {
    console.log(event.target.value);
    this.data.sendData(event.target.value);
  }
  ProfileClick() {
    console.log('profile');
    this.router.navigateByUrl('/dashboard/profile');
  }
  SignOutClick() {
    console.log('SignOutClick');
    localStorage.clear();
    this.router.navigateByUrl('user/login');
  }
  OrderClick() {
    this.router.navigateByUrl('/dashboard/oldOrders');
    console.log('OrderClick');
  }
}
