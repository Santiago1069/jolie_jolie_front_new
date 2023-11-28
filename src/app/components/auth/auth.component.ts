import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/Login';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { CookieService } from 'ngx-cookie-service';
import { get } from 'http';
import { env } from 'process';
import { environment } from 'src/environments/environment';
import { Console } from 'console';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user: User = new User();
  loginObjeto: Login = new Login();
  documents: any = [];
  users: any = [];
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private AuthService: AuthService, private router: Router, private formBuilder: FormBuilder, private cookieService: CookieService) {
    this.loginForm = this.formBuilder.group({});
    this.registerForm = this.formBuilder.group({});
  }
  guardarDatos(datos: any): void {
    this.cookieService.set('misDatos', JSON.stringify(datos));
    window.location.href = environment. adminUrl
  }

  ngOnInit(): void {
    this.getTipeDocument();
    this.loginFormGroupFuction();
    this.registerFormGroupFuction();
  }

  loginFormGroupFuction() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]]
    });
  }

  registerFormGroupFuction() {
    this.registerForm = this.formBuilder.group({
      nombre_completo: ['', [Validators.required]],
      tipo_documento: ['', [Validators.required]],
      numero_documento: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      check: ['', [Validators.required]]
    });
  }

  getTipeDocument() {
    this.AuthService.getTipeDocument().subscribe(
      res => {
        this.documents = res;
      },
      err => {
        console.log(err)
      }
    )
  }

  createUser() {

    var checkbox = document.getElementById("check") as HTMLInputElement;

    if (this.user.identificacion == '' || this.user.nombre == '' || this.user.correo == '' || this.user.password == '' || this.user.celular == 0) {
      return
    }

    if (!checkbox.checked) {
      return
    }

    this.AuthService.createUser(this.user).subscribe(
      res => {
        Swal.fire({
          title: 'Muy bien',
          text: "El usuario '" + this.user.nombre + "' ha sido registrado correctamente!",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Continuar'
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        })
      },
      (event: HttpErrorResponse) => {
        Swal.fire({
          title: 'Error',
          text: event.error.msg,
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Continuar'
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        })
      }
    )
  }

  login() {
    if (this.loginObjeto.correo == '' || this.loginObjeto.password == '') {
      return
    }

    this.AuthService.login(this.loginObjeto).subscribe({
      next: (token) => {
        localStorage.setItem('tocken', token as string);
        this.getUser();
      },
      error: (e: HttpErrorResponse) => {
        if (e.error.msg) {
          Swal.fire(
            'Error',
            e.error.msg,
            'error'
          )
        } else {
          Swal.fire(
            'Error',
            'Error con el servidor comuniquese con el administrador ',
            'error'
          )
        }

      }
    }
    )

  }
  getUser() {
    this.AuthService.profile().subscribe(
      res => {
        this.users = res;
        if (this.users.id_perfiles_fk === 1) {
          this.guardarDatos({ user: this.loginObjeto.correo, pwd: this.loginObjeto.password as string });
        } else {
          this.router.navigate(['/main']);
        }
      },
      err => {
        console.log(err)
      }
    )
  }

}
