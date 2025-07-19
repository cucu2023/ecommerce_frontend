import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';

@Component({
    selector: 'app-categorias',
    templateUrl: './categorias.component.html',
    styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
    categorias: any[] = [];

    constructor(private categoriaService: CategoriaService) { }

    ngOnInit() {
        this.obtenerCategorias();
    }

    obtenerCategorias() {
        this.categoriaService.getCategorias().subscribe(data => {
            this.categorias = data;
        });
    }

    eliminarCategoria(id: number) {
        this.categoriaService.eliminarCategoria(id).subscribe(() => {
            this.obtenerCategorias();
        });
    }
} 