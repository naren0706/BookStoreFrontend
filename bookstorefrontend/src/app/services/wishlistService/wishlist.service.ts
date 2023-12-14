import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservices/httpservice.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor(private httpService: HttpserviceService) {}
  GetAllWishList(token: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.getService(
      'WishList/GetAllWishListBooks',
      true,
      httpAuthOptions
    );
  }
  AddToWishList(url: any, token: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.postService(
      'WishList/AddToWishList' + url,
      {},
      true,
      httpAuthOptions
    );
  }
  RemoveFromWishlist(url: any, token: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.deleteService(
      'WishList/RemoveBookFromWishList' + url,
      true,
      httpAuthOptions
    );
  }
  AddBookCart(url: any, token: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.postService(
      'WishList/AddWishListBookToCart' + url,
      {},
      true,
      httpAuthOptions
    );
  }
}
