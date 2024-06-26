import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private filter = new BehaviorSubject('');
  recieveData = this.filter.asObservable();
  sendData(message: string) {
    this.filter.next(message);
  }
  private cartCount = new BehaviorSubject<number>(0);
  constructor() {}
  changeMessage(newMessage: number) {
    console.log(this.cartCount.value);
  }
  getMessage() {
    return this.cartCount.asObservable();
  }
}
