import { Component, OnInit } from '@angular/core';
import { EshopService } from '../../services/eshop.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {

  dataItems:any = [];

  constructor(private eshop: EshopService, private router: Router) { 
    this.eshop.getItems()
    .subscribe((items:any) => {
      this.dataItems = items.orders;
    })
  }

  verProductos( orden:any ){
    this.router.navigate(['/products',orden]);
  }

  ngOnInit(): void {
  }

}
