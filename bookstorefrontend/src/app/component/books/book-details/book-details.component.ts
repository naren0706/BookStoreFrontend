import { CartService } from 'src/app/services/CartServices/cart.service';
import { FeedbackService } from './../../../services/feedBackServices/feedback.service';
import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlistService/wishlist.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  book: any;
  Rating: any;
  feedback!: any;
  feedbackArray!: any;
  stars: boolean[] = Array(5).fill(false);
  Math: any;
  constructor(
    private feedbackService: FeedbackService,
    private cartService: CartService,
    private WishlistService: WishlistService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    const bookData = localStorage.getItem('book');
    if (bookData) {
      this.book = JSON.parse(bookData);
    }
    console.log(this.book);
    this.getAllFeedback();
  }
  getAllFeedback() {
    var url = '?bookId=' + this.book.bookId;
    // console.log(url);

    this.feedbackService.getAllFeedback(url).subscribe((res: any) => {
      console.log('feedback');

      console.log(res);
      this.feedbackArray = res.data;
    });
  }
  rateBook(rating: number): void {
    this.stars = this.stars.map((_, index) => index < rating);
    this.Rating = rating;
  }
  submit() {
    console.log(this.Rating);
    console.log(this.feedback);

    let reqData = {
      customerDescription: this.feedback,
      Rating: this.Rating,
      bookId: +this.book.bookId,
    };
    this.feedbackService
      .addFeedback(reqData, localStorage.getItem('token'))
      .subscribe((res) => {
        console.log(res);
      });
    // location.reload();
  }
  AddToCart() {
    var url = '?bookId=' + this.book.bookId;
    console.log('cart');
    this.cartService.AddToCart(url, localStorage.getItem('token')).subscribe(
      (res) => {
        console.log(res);
        this.snackBar.open('Book Added to Cart', '', {
          duration: 1000,
        });
      },
      (error) => {
        this.snackBar.open(error.error.message, '', {
          duration: 1000,
        });
      }
    );
  }
  addToWishList() {
    var url = '?bookId=' + this.book.bookId;

    this.WishlistService.AddToWishList(
      url,
      localStorage.getItem('token')
    ).subscribe((res: any) => {
      console.log(res);
    });
    this.snackBar.open('Book Added to WishList', '', {
      duration: 1000,
    });
  }
}
