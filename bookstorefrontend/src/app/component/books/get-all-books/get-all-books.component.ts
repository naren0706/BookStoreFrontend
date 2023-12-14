import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/BookService/book.service';
import { DataService } from 'src/app/services/dataServices/data.service';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss'],
})
export class GetAllBooksComponent implements OnInit {
  bookArray: any;
  filterstring: any = '';
  constructor(private bookservice: BookService,private data:DataService) {}
  ngOnInit(): void {
    console.log('get all books');
    this.data.recieveData.subscribe((res: any) => {
      console.log(res);
      this.filterstring = res;
    });
    this.bookservice.getAllBooks().subscribe((res: any) => {
      // console.log(res.data);
      this.bookArray = res.data;
      console.log(this.bookArray);
    });
  }
}
