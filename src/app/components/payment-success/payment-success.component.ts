import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.successCompra();
  }

  successCompra(){
    Swal.fire({
      title: 'Excelente',
      text: "Compra realizada correctamente, revisa tu correo posiblemente en la bandeja de SPAM para visualizar la descripcion de la compra",
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Ir al inicio',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'https://jolie-jolie-front-new.vercel.app/listCompras';
      }
    })
  }

}
