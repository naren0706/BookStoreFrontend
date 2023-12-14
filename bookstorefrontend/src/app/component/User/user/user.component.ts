import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  link:any;
  constructor(private router: Router) {}
  login() {
    console.log("login");
    this.router.navigateByUrl('/user/login');
  }
  signUp() {
    this.router.navigateByUrl('/user/register');
  }
}
