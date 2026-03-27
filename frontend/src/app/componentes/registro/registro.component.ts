import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  nuevoUsuario = {
    nombre: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  registrar() {
    this.authService.register(this.nuevoUsuario).subscribe({
      next: (res) => {
        console.log(res);
        alert(`Usuario ${this.nuevoUsuario.nombre} registrado`);
      },
      error: (err) => {
        console.error(err);
        alert('Error en registro');
      },
    });
  }
}
