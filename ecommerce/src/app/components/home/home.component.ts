import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavbarComponent, SearchBarComponent, CarouselComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
    // Datos de ejemplo para las ofertas del carrusel
    ofertas = [
        {
            id: 1,
            titulo: 'Ofertas del Día',
            descripcion: 'Hasta 50% de descuento',
            imagen: 'https://via.placeholder.com/800x300/007bff/ffffff?text=Oferta+Especial+1',
            enlace: '#'
        },
        {
            id: 2,
            titulo: 'Electrónicos',
            descripcion: 'Los mejores precios',
            imagen: 'https://via.placeholder.com/800x300/28a745/ffffff?text=Electrónicos+2',
            enlace: '#'
        },
        {
            id: 3,
            titulo: 'Ropa y Accesorios',
            descripcion: 'Nueva colección',
            imagen: 'https://via.placeholder.com/800x300/dc3545/ffffff?text=Moda+3',
            enlace: '#'
        }
    ];
} 