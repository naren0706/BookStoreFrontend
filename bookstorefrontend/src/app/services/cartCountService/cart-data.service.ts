import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartDataService {
  private cartCount = new BehaviorSubject<number>(0);
  constructor() {}
  changeMessage(newMessage: number) {
    this.cartCount.next(newMessage);
  }
  getMessage() {
    return this.cartCount.asObservable();
  }
}
