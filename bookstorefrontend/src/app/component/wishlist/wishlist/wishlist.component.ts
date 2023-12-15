import { WishlistService } from './../../../services/wishlistService/wishlist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  wishListBook: any;
  constructor(private WishlistService: WishlistService) {}
  ngOnInit(): void {
    this.getAllWishlist();
  }
  receiveMessage($event: any) {
    this.getAllWishlist();
  }
  getAllWishlist() {
    this.WishlistService.GetAllWishList(
      localStorage.getItem('token')
    ).subscribe((res: any) => {
      console.log(res);
      this.wishListBook = res.data;
    });
  }
}
