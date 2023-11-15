import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createPayment() {
    return this.http.get(`${this.API_URL}/payment`);
  }

  successCompra() {
    return this.http.get(`${this.API_URL}/success`);
  }

  failureCompra() {
    return this.http.get(`${this.API_URL}/failure`);
  }
}
