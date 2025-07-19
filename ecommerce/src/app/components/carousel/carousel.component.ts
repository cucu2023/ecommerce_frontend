import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Oferta {
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string;
    enlace: string;
}

@Component({
    selector: 'app-carousel',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy {
    @Input() ofertas: Oferta[] = [];

    currentIndex = 0;
    private interval: any;

    ngOnInit() {
        this.startAutoPlay();
    }

    ngOnDestroy() {
        this.stopAutoPlay();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.ofertas.length;
    }

    prevSlide() {
        this.currentIndex = this.currentIndex === 0
            ? this.ofertas.length - 1
            : this.currentIndex - 1;
    }

    goToSlide(index: number) {
        this.currentIndex = index;
    }

    startAutoPlay() {
        this.interval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Cambia cada 5 segundos
    }

    stopAutoPlay() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    onMouseEnter() {
        this.stopAutoPlay();
    }

    onMouseLeave() {
        this.startAutoPlay();
    }
} 