import { DataService } from 'src/app/services/dataServices/data.service';
import { CartDataService } from 'src/app/services/cartCountService/cart-data.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/CartServices/cart.service';

@Component({
  selector: 'app-cart-books',
  templateUrl: './cart-books.component.html',
  styleUrls: ['./cart-books.component.scss'],
})
export class CartBooksComponent implements OnInit {
  @Input() book: any;
  cartCount: number = 0;
  @Output() messageEvent = new EventEmitter<string>();

  constructor(
    private cartService: CartService,
    private router: Router,
    private cartDataService: CartDataService,
    private dataService: DataService
  ) {}
  ngOnInit() {
    if (this.book && this.book.bookCount !== undefined) {
      this.cartCount = this.book.bookCount;
    }
  }

  decrement() {
    this.cartCount--;
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
        this.messageEvent.emit('bookRemoved');
      });
    this.dataService.changeMessage(1);
  }
  ImageClick(){
    console.log(this.book);
    
    localStorage.setItem("book",JSON.stringify(this.book.book));
    this.router.navigateByUrl('dashboard/bookDetails');
  }
}
