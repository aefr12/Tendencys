export class ProductoModel {
    number: string;
    name: string;
    sku: string;
    price: string;
    quantity: string;

    constructor(number: string, name: string, sku: string, price: string, quantity: string){
        this.number = number;
        this.name = name;
        this.sku = sku;
        this.price = price;
        this.quantity = quantity;
    }
}