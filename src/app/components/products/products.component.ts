import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartProduct } from 'src/app/models/CartProduct';
import { Compra } from 'src/app/models/Compra';
import { Product } from 'src/app/models/Product';
import { AuthService } from 'src/app/services/auth.service';
import { PaymentService } from 'src/app/services/payment.service';
import { ProductService } from 'src/app/services/product.service';


declare var $: any;
declare function jsMain([]): any;
declare function jsSlickCustom([]): any;


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

  direccion: string = '';

  productCart: any = [];

  valores: any = [];

  quantityProducts: any = 0;
  searchText: any;

  totalPriceProducts: any = 0;

  public page!: number;

  compra: Compra = {
    direccion: '',
    estado: 0,
    valor_total: 0,
    cantidad_productos: 0,
    id_usuario_fk: '',
    id_zona_fk: 0,
    metodopago: 0
  };

  comprasProducts: any = [];

  user: any = [];




  constructor(private productService: ProductService, private paymentService: PaymentService, private authService: AuthService) { }

  ngOnInit(): void {
    setTimeout(() => {
      jsMain($);
      jsSlickCustom($);
    }, 3000);

    this.getProducts();
    this.getUser();
  }

  getUser() {
    this.authService.profile().subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => {
        console.log(err);
      }
    })
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

  addProductCart(id_producto: number, name: string, price: number, image: string | undefined, quantity: number) {
    if (quantity > 0) {
      this.productCart.push({
        id_producto: id_producto,
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

  async payment() {
    const idCompra = await this.creataCompra();
    this.comprasProductsFuction(idCompra);
    this.paymentService.createPayment(this.user.identificacion).subscribe({
      next: (res) => {
        this.valores = res
        window.location.href = this.valores.init_point
        this.productCart = [];
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

  cerrarModalcart() {
    const cerrarModal = document.getElementById("closeModalCart");
    if (cerrarModal) {
      cerrarModal.click();
    }
  }

  async creataCompra() {
    this.llenarCompra();
    let idCompra: number = 0;
    (await this.paymentService.createCompra(this.compra)).subscribe({
      next: (res: any) => {
        idCompra = res.id_compra;
      },
      error: (err) => {
        console.log(err);
      }
    })
    await new Promise(resolve => setTimeout(resolve, 3000));
    return idCompra
  }

  llenarCompra() {
    this.compra.direccion = this.direccion;
    this.compra.estado = 0;
    this.compra.valor_total = this.totalPriceProducts;
    this.compra.cantidad_productos = this.cantidadProducts();
    this.compra.id_usuario_fk = this.user.identificacion;
    this.compra.id_zona_fk = 1;
    this.compra.metodopago = 1;
  }

  cantidadProducts(): number {
    for (let i = 0; i < this.productCart.length; i++) {
      this.quantityProducts += this.productCart[i].quantityProducts;
    }
    return this.quantityProducts;
  }

  comprasProductsFuction(idCompra: any) {
    this.comprasProducts = this.productCart;
    this.paymentService.createCompraProduct(this.comprasProducts, idCompra).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}
