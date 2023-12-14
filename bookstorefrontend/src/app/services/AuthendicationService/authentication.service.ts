import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService implements CanActivate {
  constructor() {}
  canActivate(): boolean {
    return this.checkAuth();
  }
  private checkAuth(): boolean {
    return !!localStorage.getItem('token')
  }
}
