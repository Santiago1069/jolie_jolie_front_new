import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
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


  searchText: any;

  public page!: number;


  constructor(private productService: ProductService) { }

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
  

}
