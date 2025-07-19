import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {
    private apiUrl = 'http://localhost:8000/categorias/';

    constructor(private http: HttpClient) { }

    getCategorias(): Observable<any> {
        return this.http.get(this.apiUrl);
    }

    getCategoria(id: number): Observable<any> {
        return this.http.get(`${this.apiUrl}${id}/`);
    }

    crearCategoria(categoria: any): Observable<any> {
        return this.http.post(this.apiUrl, categoria);
    }

    actualizarCategoria(id: number, categoria: any): Observable<any> {
        return this.http.put(`${this.apiUrl}${id}/`, categoria);
    }

    eliminarCategoria(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}${id}/`);
    }
} 