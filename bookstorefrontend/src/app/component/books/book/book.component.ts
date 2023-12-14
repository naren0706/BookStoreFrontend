import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() book: any;
  constructor(private router: Router) {}
  bookClick() {
    console.log(this.book);
    localStorage.setItem('book', JSON.stringify(this.book));
    this.router.navigateByUrl('/dashboard/bookDetails')
  }
}
