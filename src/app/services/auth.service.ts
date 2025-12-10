import { Injectable } from '@angular/core';
import { LoginRequest, RegisterRequest, Usuario } from '../models/usuario.model';
import { Observable, of } from 'rxjs'; // Usamos 'of' para simular respuestas asíncronas

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: Usuario | null = null;

  constructor() {}

  login(credentials: LoginRequest): Observable<Usuario> {
    // Simulación de login
    console.log('Intentando login con:', credentials);
    // Aquí iría la llamada HTTP real
    const mockUser: Usuario = {
      id: 1,
      nombre: 'Usuario Prueba',
      email: credentials.email,
      token: 'fake-jwt-token',
    };
    this.currentUser = mockUser;
    return of(mockUser);
  }

  register(data: RegisterRequest): Observable<Usuario> {
    // Simulación de registro
    console.log('Intentando registro con:', data);
    const mockUser: Usuario = {
      id: 2,
      nombre: 'Usuario Nuevo',
      email: data.email,
      token: 'fake-jwt-token',
    };
    this.currentUser = mockUser;
    return of(mockUser);
  }

  logout(): void {
    this.currentUser = null;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  getCurrentUser(): Usuario | null {
    return this.currentUser;
  }
}
