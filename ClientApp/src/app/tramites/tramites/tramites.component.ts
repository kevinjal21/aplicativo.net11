import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tramite } from 'src/app/models/tramite';
import { TramiteService } from '../../services/tramite.service';
import { UsuarioService } from '../../services/usuario.service';


@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent implements OnInit {

  constructor(private serviciosTramite: TramiteService, private router: Router, private service: UsuarioService) { }
  tramite!: Tramite;
  listaTramites: Tramite[];
  userDetails;
  filterPost = '';

  ngOnInit(): void {
    this.tramite = {codtramite: 0, nombre: '', descripcion: '', duracion: '', costo: '', modalidad: '', url: '' };
    this.getAllTramites();
    this.service.getUsuario().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  getAllTramites() {
    this.serviciosTramite.getTramite().subscribe(tramite => this.listaTramites = tramite);
  }
//cerrar sesion
  logout() {
    localStorage.removeItem('nombres');
    localStorage.removeItem('token');
    localStorage.removeItem('apellidos');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');
    this.router.navigate(['Inicio']);
  }
}
