import { Product } from "./Product";

export class CartProduct {

    product: Product
    cantidad: any

    constructor() {
        this.product = new Product();
        this.cantidad = 0;
    }

}