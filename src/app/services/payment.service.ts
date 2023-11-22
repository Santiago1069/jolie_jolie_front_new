import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra } from '../models/Compra';
import { ComprasProducts } from '../models/ComprasProducts';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createPayment(identificacion: any) {
    return this.http.post(`${this.API_URL}/payment`, identificacion);
  }

  successCompra() {
    return this.http.get(`${this.API_URL}/success`);
  }

  failureCompra() {
    return this.http.get(`${this.API_URL}/failure`);
  }

  createCompra(compra: Compra) {
    return this.http.post(`${this.API_URL}/createCompra`, compra);
  }

  createCompraProduct(compraProducts: any) {
    return this.http.post(`${this.API_URL}/createComprasProduct`, compraProducts);
  }

}
