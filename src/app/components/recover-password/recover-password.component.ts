import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {

  password_actual: string = '';
  password_nueva: string = '';
  recoverPasswordForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { 
    this.recoverPasswordForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.recoverPasswordFormGroupFuction();
  }

  recoverPasswordFormGroupFuction() {
    this.recoverPasswordForm = this.formBuilder.group({
      password_actual: ['', [Validators.required]],
      password_nueva: ['', [Validators.required]]
    });
  }

  cambiarContrasenia() {
    if (this.password_actual == '' && this.password_nueva == '') {
      return
    }

    this.authService.cambiarPassword(this.password_actual, this.password_nueva).subscribe({

      next: (res) => {
        Swal.fire({
          title: 'Contraseña actualizada',
          text: "Cambio de contraseña exitosa",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Continuar'
        }).then((result) => {
          if (result.isConfirmed) {
            if (res.id_perfiles_fk == 1) {
              this.router.navigate(['main']);
            } else {
              this.router.navigate(['main']);
            }

          }
        })
      },
      error(err) {
        Swal.fire({
          title: 'Error',
          text: err.error.msg,
          icon: 'error',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Continuar'
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        })
      },
    })
  }

}
