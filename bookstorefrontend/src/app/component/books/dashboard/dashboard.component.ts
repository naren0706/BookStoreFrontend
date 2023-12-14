import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { DataService } from 'src/app/services/dataServices/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  filterstr: string = '';
  constructor(private data: DataService, private router: Router) {}
  ngOnInit() {}

  searchNotes(event: any) {
    console.log(event.target.value);
    this.data.sendData(event.target.value);
  }
  ProfileClick() {
    console.log('profile');
    this.router.navigateByUrl('/dashboard/profile');
  }
  SignOutClick() {
    console.log('SignOutClick');
    localStorage.clear();
    this.router.navigateByUrl('user/login');
  }
  OrderClick() {
    this.router.navigateByUrl('/dashboard/oldOrders');
    console.log('OrderClick');
  }
}
