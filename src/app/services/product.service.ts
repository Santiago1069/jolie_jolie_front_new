import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Product } from '../models/Product'
import { Observable } from 'rxjs';
import {CartProduct}  from '../models/CartProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URL = 'https://jolie-jolie-back.vercel.app';


  constructor(private http: HttpClient) {
  }


  allProductsActivate() {
    return this.http.get(`${this.API_URL}/products`);
  }

  getOneProduct(id: Number): Observable<Product> {
    return this.http.get<Product>(`${this.API_URL}/ManagementProduct/${id}`);
  }

  getCategories() {
    return this.http.get(`${this.API_URL}/categories`);
  }

}
