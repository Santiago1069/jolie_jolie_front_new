import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartProduct } from 'src/app/models/CartProduct';
import { Product } from 'src/app/models/Product';
import { PaymentService } from 'src/app/services/payment.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any = [];
  product: Product = {
    id_producto: 0,
    nombre_producto: '',
    color: '',
    precio: 0,
    imagen: '',
    descripcion_producto: '',
    cantidad: 0,
    estado: 0,
    id_categoria: 0
  };

  productCart: any = [];

  valores: any = [];

  quantityProducts: any = 0;
  searchText: any;

  totalPriceProducts: any = 0;

  public page!: number;


  constructor(private productService: ProductService, private paymentService: PaymentService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.allProductsActivate().subscribe({
      next: (res) => {
        this.products = res;
        console.log(this.products);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getOneProduct(id: number) {
    this.productService.getOneProduct(id).subscribe({
      next: (res) => {
        this.product = res;
        console.log(this.product);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

addProductCart(name: string, price: number, image: string | undefined, quantity: number) {
    if (quantity > 0) {
      this.productCart.push({
        name: name,
        price: price,
        image: image,
        quantityProducts: quantity
      });
      this.quantityProducts = 0;
      this.totalPriceProductsCart();
      this.resetModal();
    }

  }

  totalPriceProductsCart() {
    this.totalPriceProducts = 0;
    for (let i = 0; i < this.productCart.length; i++) {
      this.totalPriceProducts += this.productCart[i].price * this.productCart[i].quantityProducts;
    }
  }

  deleteProductCart(name: string, quantity: number) {
    for (let i = 0; i < this.productCart.length; i++) {
      if (this.productCart[i].name === name && this.productCart[i].quantityProducts === quantity) {
        this.productCart.splice(i, 1);
      }
    }
    this.totalPriceProductsCart();
  }

  payment() {
    this.paymentService.createPayment().subscribe({
      next: (res) => {
        this.valores = res
        window.location.href = this.valores.init_point
      },
      error: (err) => {
        console.log(err);
      }
    }
    );
  }

  resetModal() {
    const cerrarModal = document.getElementById("closeModal");
    if (cerrarModal) {
      cerrarModal.click();
    }
  }

}
