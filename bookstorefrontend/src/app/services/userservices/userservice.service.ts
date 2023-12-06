import { Injectable, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservices/httpservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  constructor(private httpService: HttpserviceService) {}
  loginService(url: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    return this.httpService.getService(
      'UserConroller/Login' + url,
      false,
      httpAuthOptions
    );
  }
  register(reqData: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    return this.httpService.postService(
      'UserConroller/Register',
      reqData,
      false,
      httpAuthOptions
    );
  }
  ForgotPassword(url: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token',
      }),
    };
    return this.httpService.getService(
      'UserConroller/forgetPassword' + url,
      false,
      httpAuthOptions
    );
  }
  resetPassword(url: any, token: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.putService(
      'UserConroller/ResetPassword' + url,
      {},
      true,
      httpAuthOptions
    );
  }
}
