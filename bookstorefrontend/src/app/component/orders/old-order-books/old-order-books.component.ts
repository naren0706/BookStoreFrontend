import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-old-order-books',
  templateUrl: './old-order-books.component.html',
  styleUrls: ['./old-order-books.component.scss'],
})
export class OldOrderBooksComponent implements OnInit {
  @Input() book: any;
  ngOnInit(): void {
    console.log(this.book);
  }
}
