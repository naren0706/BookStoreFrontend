import { HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from './../httpservices/httpservice.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeedbackService {
  constructor(private httpService: HttpserviceService) {}
  addFeedback(reqData: any, token: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.postService(
      'CustomerFeedback/AddFeedback',
      reqData,
      true,
      httpAuthOptions
    );
  }
  getAllFeedback(url: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token ',
      }),
    };
    return this.httpService.getService(
      'CustomerFeedback/GetFeedBack'+url,
      false,
      httpAuthOptions
    );
  }
}
