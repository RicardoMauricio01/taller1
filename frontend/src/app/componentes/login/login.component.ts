import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credenciales = {
    email: '',
    password: '',
  };

  constructor(private auth: AuthService) {}

  iniciarSesion() {
    console.log('Intentando entrar con:', this.credenciales);

    this.auth.login(this.credenciales).subscribe({
      next: (res: any) => {
        console.log('Respuesta backend:', res);

        alert('¡Acceso concedido! Bienvenido al sistema.');
      },
      error: (err) => {
        console.error('Error:', err);

        alert(err.error?.error || 'Error: Correo o contraseña incorrectos.');
      },
    });
  }
}