import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from '../login/login';
import { RegisterComponent } from '../register/register';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive, LoginComponent, RegisterComponent],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    isMenuOpen = false;
    isAuthModalOpen = false;
    authView: 'login' | 'register' = 'login';

    toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
    }

    closeMenu() {
        this.isMenuOpen = false;
    }

    openAuthModal() {
        this.authView = 'login';
        this.isAuthModalOpen = true;
    }

    switchToRegister(event: Event) {
        event.preventDefault();
        this.authView = 'register';
    }

    switchToLogin(event: Event) {
        event.preventDefault();
        this.authView = 'login';
    }

    closeAuthModal() {
        this.isAuthModalOpen = false;
    }
} 