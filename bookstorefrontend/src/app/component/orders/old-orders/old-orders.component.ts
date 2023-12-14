import { SummaryOrderService } from 'src/app/services/orderSummary/summary-order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-old-orders',
  templateUrl: './old-orders.component.html',
  styleUrls: ['./old-orders.component.scss'],
})
export class OldOrdersComponent implements OnInit {
  carts!: any;
  constructor(private summaryOrderService: SummaryOrderService) {}
  ngOnInit(): void {
    this.summaryOrderService
      .GetOrderSummary(localStorage.getItem('token'))
      .subscribe((res: any) => {
        console.log(res);
        this.carts = res.data;
      });
  }
}
