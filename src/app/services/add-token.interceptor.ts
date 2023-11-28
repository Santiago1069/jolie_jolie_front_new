import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {


  constructor(private router: Router, ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('tocken');

    if(token){
      console.log('Token valido')
      request = request.clone({ setHeaders: { authorization: `Bearer ${token}`}})
    }

    return next.handle(request) // con esta funciona las alertas de validacion del login con el de abajo no

    /* return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 401){
          this.router.navigate(['/loginUser'])
        }
        return throwError(() => new Error('Error'))
      })
    ); */
  }
}
