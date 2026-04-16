import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  usuario_id: number = 0;

  nombre: string = '';
  apellido: string = '';
  edad: number = 0;
  telefono: string = '';

  mensajeError: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private perfilService: PerfilService
  ) {}

  ngOnInit(): void {
    this.usuario_id = Number(this.route.snapshot.params['usuario_id']);

    this.perfilService.obtenerPerfil(this.usuario_id).subscribe({
      next: (data) => {
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.edad = data.edad;
        this.telefono = data.telefono;
      },
      error: () => {
        this.mensajeError = 'No se pudo cargar el perfil';
      }
    });
  }

  guardarCambios(): void {
    const datos = {
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      telefono: this.telefono
    };

    this.perfilService.actualizarPerfil(this.usuario_id, datos).subscribe({
      next: () => {
        this.router.navigate([`/perfil/${this.usuario_id}`]);
      },
      error: (error) => {
        this.mensajeError = error.error.message || 'Error al actualizar perfil';
      }
    });
  }

  cancelar(): void {
    this.router.navigate([`/perfil/${this.usuario_id}`]);
  }
}