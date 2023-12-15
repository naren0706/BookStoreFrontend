import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistcountService {
  private cartCount = new BehaviorSubject<number>(0);
  constructor() {}
  changeMessage(newMessage: number) {
    console.log("new msg wish");
    
    console.log(newMessage);
    
    this.cartCount.next(newMessage);
  }
  getMessage() {
    return this.cartCount.asObservable();
  }
}
