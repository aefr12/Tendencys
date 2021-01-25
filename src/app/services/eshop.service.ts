import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductoModel } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class EshopService {

  product: ProductoModel[] = [];

  constructor(private http: HttpClient) { 
  }

  getItems(){
    const headers = new HttpHeaders({
      'Authorization': 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYwNTY0NDA0NzA1OH0.skfIY_7CAANkxmhoq37OI4jYRE8flx1ENq1v1VaRevJiroYNFQYz7Oy6hL1YZ1OJkevXSQFuLMHTqY0w6d5nPQ'
    });
    return this.http.get('https://eshop-deve.herokuapp.com/api/v2/orders', {headers});
  }

  crearProducto( number: string, name: string, sku: string, price: string, quantity: string){
    const nuevo = new ProductoModel(
      number,
      name,
      sku,
      price,
      quantity);
      this.product.push(nuevo);
      this.guardarStorage();
  }

  guardarStorage(){
    localStorage.setItem('agregado',JSON.stringify(this.product));
  }

  cargarStorage(){
    if(localStorage.getItem("agregado")){
      return this.product = JSON.parse(localStorage.getItem("agregado"));
    }
    else{
      this.product = [];
    }
  }
}
