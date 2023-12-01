import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-payment-failure',
  templateUrl: './payment-failure.component.html',
  styleUrls: ['./payment-failure.component.css']
})
export class PaymentFailureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.failureCompra();
  }

  failureCompra(){
    Swal.fire({
      title: 'Uyyy',
      text: "La compra no se realizo correctamente!",
      icon: 'warning',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Volver al inicio',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'https://jolie-jolie-front.onrender.com//main';
      }
    })
  }


}
