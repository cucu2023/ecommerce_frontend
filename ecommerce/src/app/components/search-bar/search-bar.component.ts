import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search-bar',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './search-bar.component.html',
    styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
    searchTerm = '';

    onSearch() {
        if (this.searchTerm.trim()) {
            console.log('Buscando:', this.searchTerm);
            // Aquí implementarías la lógica de búsqueda
            // Por ejemplo, navegar a una página de resultados
        }
    }

    onKeyPress(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.onSearch();
        }
    }
} 