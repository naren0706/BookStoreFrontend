import { CartDataService } from 'src/app/services/cartCountService/cart-data.service';
import { WishlistService } from 'src/app/services/wishlistService/wishlist.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WishlistcountService } from 'src/app/services/wishlistCount/wishlistcount.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist-book',
  templateUrl: './wishlist-book.component.html',
  styleUrls: ['./wishlist-book.component.scss'],
})
export class WishlistBookComponent {
  @Input() book: any;
  @Output() messageEvent = new EventEmitter<string>();

  constructor(
    private wishlistService: WishlistService,
    private wishlistcountService: WishlistcountService,
    private cartDataService: CartDataService,
    private router: Router
  ) {}
  RemoveBook() {
    let url = '?bookId=' + this.book.bookId;
    this.wishlistService
      .RemoveFromWishlist(url, localStorage.getItem('token'))
      .subscribe((res: any) => {
        console.log(res);
        this.wishlistcountService.changeMessage(1);
      });
    this.messageEvent.emit('1');
    // location.reload();
  }
  AddBookCart() {
    let url = '?bookId=' + this.book.bookId;
    this.wishlistService
      .AddBookCart(url, localStorage.getItem('token'))
      .subscribe((res: any) => {
        console.log(res);
        this.cartDataService.changeMessage(1);
        this.messageEvent.emit('1');
      });
  }
  ImageClick() {
    console.log(this.book.book);
    localStorage.setItem('book', JSON.stringify(this.book.book));
    this.router.navigateByUrl('dashboard/bookDetails');
  }
}
