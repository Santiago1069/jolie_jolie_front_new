import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra } from '../models/Compra';
import { ComprasProducts } from '../models/ComprasProducts';
import { env } from 'process';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {


  API_URL = environment.apiUrl;

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

  async createCompra(compra: Compra) {
    return this.http.post(`${this.API_URL}/createCompra`, compra);
  }

  createCompraProduct(compraProducts: any, idCompra: any) {
    return this.http.post(`${this.API_URL}/createComprasProduct/${idCompra}`, compraProducts);
  }

}
