import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { LoginRequest, RegisterRequest } from '../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginMode: boolean = true; // Empieza en modo Login

  loginData: LoginRequest = {
    email: '',
    password: '',
  };

  registerData: RegisterRequest = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.isLoginMode) {
      this.authService.login(this.loginData).subscribe({
        next: (user) => {
          console.log('Login exitoso:', user);
          this.router.navigate(['/inicio']); // Redirigir a inicio
        },
        error: (err) => console.error('Error en login', err),
      });
    } else {
      if (this.registerData.password !== this.registerData.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }
      this.authService.register(this.registerData).subscribe({
        next: (user) => {
          console.log('Registro exitoso:', user);
          this.router.navigate(['/inicio']); // Redirigir a inicio
        },
        error: (err) => console.error('Error en registro', err),
      });
    }
  }
}
