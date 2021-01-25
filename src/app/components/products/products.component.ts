import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EshopService } from '../../services/eshop.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit{

  items:any = [];
  products:any = [];
  number:any;
  addProducts:any = [];
  data:any = [];
  datos:any = [];

  constructor(private router:ActivatedRoute, private eshop: EshopService, private route: Router) {
    this.router.params.subscribe(params => {
      this.number = params['number'];
    });

    this.cargarDatos();
    this.addProducts = this.eshop.cargarStorage();
  
  }

  cargarDatos(){
    this.eshop.getItems()
    .subscribe((items:any) => {
      this.items = items.orders;
      for (let i = 0; i < this.items.length; i++) {
        if(this.items[i].number === this.number){
          this.products = this.items[i].items;
        }
      }
    });
  }

  nuevoProducto(number:any){
    this.route.navigate(['add',number]);
  }

  ngOnInit(): void {
  }

}
