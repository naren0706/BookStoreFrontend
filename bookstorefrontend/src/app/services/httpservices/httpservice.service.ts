import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpserviceService {
  baseUrl = 'https://localhost:5001/api/';

  constructor(private httpClient: HttpClient) {}
  postService(url: string, reqBody: any, token: boolean, httpAuthOptions: any) {
    return this.httpClient.post(
      this.baseUrl + url,
      reqBody,
      token && httpAuthOptions
    );
  }
  putService(url: string, reqBody: any, token: boolean, httpAuthOptions: any) {
    return this.httpClient.put(
      this.baseUrl + url,
      reqBody,
      token && httpAuthOptions
    );
  }
  getService(url: string, token: boolean, httpAuthOptions: any) {
    return this.httpClient.get(this.baseUrl + url, token && httpAuthOptions);
  }
  deleteService(url: string, token: boolean, httpAuthOptions: any) {
    return this.httpClient.get(this.baseUrl + url, token && httpAuthOptions);
  }
}
