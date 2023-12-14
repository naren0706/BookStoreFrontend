import { WishlistService } from 'src/app/services/wishlistService/wishlist.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wishlist-book',
  templateUrl: './wishlist-book.component.html',
  styleUrls: ['./wishlist-book.component.scss'],
})
export class WishlistBookComponent {
  @Input() book: any;
  constructor(private wishlistService: WishlistService) {}
  RemoveBook() {
    let url = '?bookId=' + this.book.bookId;
    this.wishlistService
      .RemoveFromWishlist(url, localStorage.getItem('token'))
      .subscribe((res: any) => {
        console.log(res);
      });
    location.reload();
  }
  AddBookCart(){
    let url = '?bookId=' + this.book.bookId;
    this.wishlistService
      .AddBookCart(url, localStorage.getItem('token'))
      .subscribe((res: any) => {
        console.log(res);
      });
    location.reload();
  }
}
