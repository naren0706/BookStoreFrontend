import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservices/httpservice.service';

@Injectable({
  providedIn: 'root',
})
export class PlaceOrderService {
  constructor(private httpService: HttpserviceService) {}
  placeOrder(url: any, token: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.postService(
      'OrderPlaced/AddNewPlaceOrder' + url,
      {},
      true,
      httpAuthOptions
    );
  }
}
