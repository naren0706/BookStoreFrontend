import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservices/httpservice.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SummaryOrderService {
  constructor(private httpService: HttpserviceService) {}
  GetOrderSummary(token: any) {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.httpService.getService(
      'OrderSummary/GetAllSummmary',
      true,
      httpAuthOptions
    );
  }
}
