import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Login } from '../models/Login';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = 'https://api-jolie-jolie.onrender.com';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<any> {
    return this.http.post(`${this.API_URL}/newUser`, user);
  }

  login(login: Login): Observable<String> {
    return this.http.post<String>(`${this.API_URL}/loginUser`, login);
  }

  profile() {
    return this.http.get(`${this.API_URL}/profile`)
  }


  getTipeDocument() {
    return this.http.get(`${this.API_URL}/documents`)
  }

  validateEmail(email: string) {
    return this.http.post(`${this.API_URL}/validateEmail`, {correo: email});
  }

  cambiarPassword(password_actual: string, password_nueva: string): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/cambiarPassword`, {password_actual: password_actual, password_nueva: password_nueva});
  }
}
