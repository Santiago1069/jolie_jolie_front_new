import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.css']
})
export class HeaderCartComponent implements OnInit {

  user: any = [];

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.getUser();
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

  getUser(){
    this.authService.profile().subscribe({
      next: (res) => {
        this.user = res;
        console.log(this.user);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
