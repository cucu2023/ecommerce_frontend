import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api/usuarios/';

  constructor(private http: HttpClient) { }

  register(userData: any) {
    return this.http.post(this.apiUrl + 'register/', userData);
  }

  login(userData: any) {
    return this.http.post(this.apiUrl + 'login/', userData);
  }

  getProtected(token: string) {
    return this.http.get(this.apiUrl + 'protected/', {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
}
