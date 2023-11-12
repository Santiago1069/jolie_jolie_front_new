import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    Swal.fire(
      '¡Hasta pronto!',
      'Cierre de sesion exitoso!!',
      'warning'
    )
    localStorage.removeItem('token');
    this.router.navigate(['/loginUser'])
  }

}
