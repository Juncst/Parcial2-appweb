import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: string = '';
  password: string = '';
  mensajeError: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  iniciarSesion() {
    const datos = {
      usuario: this.usuario,
      password: this.password
    };

    this.authService.login(datos).subscribe({
      next: (respuesta) => {

        const id = respuesta.id || respuesta.usuario?.id || respuesta.user?.id;

        if (!id) {
          this.mensajeError = 'Error al obtener el usuario';
          return;
        }

        this.router.navigate([`/perfil/${id}`]);
      },
      error: (error) => {
        this.mensajeError = error.error.message || 'Credenciales incorrectas';
      }
    });
  }
}