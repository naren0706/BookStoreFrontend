import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-book',
  templateUrl: './summary-book.component.html',
  styleUrls: ['./summary-book.component.scss'],
})
export class SummaryBookComponent implements OnInit {
  @Input() book: any;
  ngOnInit(): void {
    console.log("naren");
    
    console.log(this.book.book);
  }
}
