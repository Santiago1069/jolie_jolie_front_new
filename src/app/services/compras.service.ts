import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  API_URL = 'https://api-jolie-jolie.onrender.com';

  constructor(private http: HttpClient) { }

  getCompras() {
    return this.http.get(`${this.API_URL}/compras`);
  }

  getMisCompras() {
    return this.http.get(`${this.API_URL}/mis-compras`);
  }
}
