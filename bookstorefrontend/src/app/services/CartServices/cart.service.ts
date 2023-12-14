import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservices/httpservice.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private httpService: HttpserviceService) {}
  AddToCart(url: any, token: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.postService(
      'Cart/AddToCart' + url,
      {},
      true,
      httpAuthOptions
    );
  }
  GetAllCart(token: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.getService(
      'Cart/GetallCart',
      true,
      httpAuthOptions
    );
  }
  updateCart(url: any, token: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.putService(
      'Cart/UpdateCart' + url,
      {},
      true,
      httpAuthOptions
    );
  }
  removeBook(url: any, token: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.deleteService(
      'Cart/Removefromcart' + url,
      true,
      httpAuthOptions
    );
  }
}
