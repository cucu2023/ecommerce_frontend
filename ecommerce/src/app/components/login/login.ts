import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms'; // Importamos FormsModule para usar [(ngModel)]
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrl: './login.css',
  standalone: true,
  imports: [FormsModule]  // Lo vamos a llenar pronto
})
export class LoginComponent {
  @Output() switchToRegister = new EventEmitter<void>();
  username = '';
  password = '';
  token = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login({ username: this.username, password: this.password })
      .subscribe({
        next: (res: any) => {
          this.token = res.access;
          console.log('Token:', this.token);
          this.router.navigate(['/dashboard']);
        },
        error: err => {
          console.error('Error:', err);
        }
      });
  }
}
