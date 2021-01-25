import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductoModel } from 'src/app/models/producto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EshopService } from '../../services/eshop.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  number:any;
  fecha:Date = new Date();

  constructor( private router: ActivatedRoute, 
               private route: Router,
               private eshop: EshopService) {
    this.router.params.subscribe(params => {
      this.number = params['number'];
    });
   }

  ngOnInit(): void {
  }

  guardar( producto:NgForm ){
    if(producto.invalid){
      Object.values(producto.controls).forEach( control => {
        control.markAsTouched();
      });
      return;
    }
    else{
      this.eshop.crearProducto(
        this.number,
        producto.value.name,
        producto.value.sku,
        producto.value.price,
        producto.value.quantity,
        );
      this.route.navigate(['/products',this.number]);
    }
  }

}
