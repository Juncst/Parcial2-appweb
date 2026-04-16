import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilService } from '../../services/perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private perfilService: PerfilService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['usuario_id'];

    this.perfilService.obtenerPerfil(id).subscribe({
      next: (data) => {
        this.perfil = data;
      },
      error: () => {
        console.error('Error cargando perfil');
      }
    });
  }

  editar() {
    this.router.navigate([`/perfil/editar/${this.perfil.usuario_id}`]);
  }

  cerrarSesion() {
    this.router.navigate(['/']);
  }
}