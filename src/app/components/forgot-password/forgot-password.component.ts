import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email: any
  forgotPasswordForm: FormGroup;


  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.forgotPasswordForm = this.formBuilder.group({});

  }

  ngOnInit(): void {
    this.forgotPasswordFormGroupFuction();
  }

  forgotPasswordFormGroupFuction() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  validateEmail() {
    this.authService.validateEmail(this.email).subscribe({
      next: (res) => {
        Swal.fire({
          title: 'Contraseña actualizada',
          text: "Cambio de contraseña exitosa, revisa el correo '" + this.email + "' para que mires tu nueva contraseña",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Continuar'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/loginUser']);
          }
        })
      },
      error: (err) => {
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

      }
    }
    )
  }

}
