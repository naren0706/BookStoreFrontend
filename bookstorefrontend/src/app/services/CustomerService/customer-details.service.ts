import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservices/httpservice.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerDetailsService {
  constructor(private httpService: HttpserviceService) {}
  AddAddress(reqBody: any, token: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.postService(
      'CustomerDetails/AddAddress',
      reqBody,
      true,
      httpAuthOptions
    );
  }
  GetAddress(token: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.getService(
      'CustomerDetails/GetAllAddressByUserId',
      true,
      httpAuthOptions
    );
  }
  UpdateAddress(reqBody: any, token: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.putService(
      'CustomerDetails/UpdateAddress',
      reqBody,
      true,
      httpAuthOptions
    );
  }
}
