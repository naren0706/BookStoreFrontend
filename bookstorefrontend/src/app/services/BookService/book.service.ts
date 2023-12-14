import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservices/httpservice.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpServics: HttpserviceService) {}
  getAllBooks() {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-token',
      }),
    };
    return this.httpServics.getService(
      'Book/GetAllBook',
      false,
      httpAuthOptions
    );
  }
}
