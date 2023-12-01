import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  API_URL = 'https://api-jolie-jolie.onrender.com';

  constructor(private http: HttpClient) { }

  createMensajes(asunto: string, mensaje: string) {
    return this.http.post(`${this.API_URL}/contact`, { asunto, mensaje });
  }

  getMensajes() {
    return this.http.get(`${this.API_URL}/contact`);
  }
}
