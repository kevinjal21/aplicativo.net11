import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tramite } from '../models/tramite';
import { TramiteService } from '../services/tramite.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private serviciosTramite: TramiteService, private router: Router) { }
  tramite!: Tramite;
  listaTramites: Tramite[];

  filterPost = '';

  ngOnInit(): void {
    this.tramite = {codtramite: 0, nombre: '', descripcion: '', duracion: '', costo: '', modalidad: '', url: '' };
    this.getAllTramites();
  }

  getAllTramites() {
    this.serviciosTramite.getTramite().subscribe(tramite => this.listaTramites = tramite);
  }
//cerrar sesion
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
