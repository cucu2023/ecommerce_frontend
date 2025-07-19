import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {
  @Output() switchToLogin = new EventEmitter<void>();
  username = '';
  email = '';
  first_name = '';
  last_name = '';
  password1 = '';
  password2 = '';
  errorMessage = '';
  successMessage = '';

  constructor(private authService: AuthService) { }

  onRegister() {
    this.errorMessage = '';
    this.successMessage = '';
    if (this.password1 !== this.password2) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }
    const userData = {
      username: this.username,
      email: this.email,
      first_name: this.first_name,
      last_name: this.last_name,
      password1: this.password1,
      password2: this.password2
    };
    this.authService.register(userData).subscribe({
      next: (res: any) => {
        this.successMessage = '¡Registro exitoso! Ahora puedes iniciar sesión.';
      },
      error: (err) => {
        this.errorMessage = err.error?.detail || 'Error en el registro.';
      }
    });
  }
}
