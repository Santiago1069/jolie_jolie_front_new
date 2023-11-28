import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCompras() {
    return this.http.get(`${this.API_URL}/compras`);
  }

  getMisCompras() {
    return this.http.get(`${this.API_URL}/mis-compras`);
  }
}
