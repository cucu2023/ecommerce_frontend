import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
    productos: any[] = [];

    constructor(private productoService: ProductoService) { }

    ngOnInit() {
        this.obtenerProductos();
    }

    obtenerProductos() {
        this.productoService.getProductos().subscribe(data => {
            this.productos = data;
        });
    }

    eliminarProducto(id: number) {
        this.productoService.eliminarProducto(id).subscribe(() => {
            this.obtenerProductos();
        });
    }
} 