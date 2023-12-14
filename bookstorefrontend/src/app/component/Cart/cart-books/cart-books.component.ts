import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/CartServices/cart.service';

@Component({
  selector: 'app-cart-books',
  templateUrl: './cart-books.component.html',
  styleUrls: ['./cart-books.component.scss'],
})
export class CartBooksComponent implements OnInit {
  @Input() book: any;
  cartCount: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    if (this.book && this.book.bookCount !== undefined) {
      this.cartCount = this.book.bookCount;
    }
  }

  decrement() {
    this.cartCount--;
    // this.cartService.
  }

  increment() {
    this.cartCount++;
  }
  update() {
    let url = '?bookId=' + this.book.bookId + '&updateValue=' + this.cartCount;
    console.log(url);

    this.cartService
      .updateCart(url, localStorage.getItem('token'))
      .subscribe((res) => {
        console.log(res);
      });
  }
  removeBook() {
    let url = '?bookId=' + this.book.bookId;
    console.log(url);

    this.cartService
      .removeBook(url, localStorage.getItem('token'))
      .subscribe((res) => {
        console.log(res);
      });
      location.reload();
  }
}
