import { Component, OnInit } from '@angular/core';
import { Tramite } from 'src/app/models/tramite';
import { TramiteService } from '../../services/tramite.service';


@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent implements OnInit {

  constructor(private serviciosTramite: TramiteService) { }
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
  // listaTramites: Tramite[] = [
  //   {
  //     codtramite: 1, nombre: 'Personería Jurídica de organismos deportivos y recreativos',
  //     descripcion: 'Reconocimiento de la personería jurídica de los organismos deportivos y recreativos vinculados al sistema nacional del deporte.',
  //     duracion: '60', costo: 'Trámite sin costo', modalidad: 'Trámite en línea', url: 'Reconocimiento'
  //   },
  //   {
  //     codtramite: 2, nombre: 'Inscripción de dignatarios de los organismos deportivos y recreativos',
  //     descripcion: 'Inscripción de dignatarios de los organismos deportivos y recreativos vinculados al sistema nacional del deporte.',
  //     duracion: '30', costo: 'Trámite sin costo', modalidad: 'Trámite en línea', url: 'Inscripcion'
  //   },
  //   {
  //     codtramite: 3, nombre: 'Aprobación de reformas estatutarias',
  //     descripcion: 'Aprobación de las reformas estatutarias de los organismos deportivos o recreativos vinculados al sistema nacional del deporte.',
  //     duracion: '25', costo: 'Trámite sin costo', modalidad: 'Trámite en línea', url: 'Aprobacion'
  //   },
  //   {
  //     codtramite: 4, nombre: 'Cancelación de Personería Jurídica',
  //     descripcion: 'Cancelación de la personería jurídica de ligas y clubes deportivos.',
  //     duracion: '5', costo: 'Trámite sin costo', modalidad: 'Trámite en línea', url: 'Cancelacion'
  //   },
  //   {
  //     codtramite: 5, nombre: 'Certificación de existencia y representación legal',
  //     descripcion: 'Certificación de existencia y representación legal de las ligas y asociaciones deportivas',
  //     duracion: '3', costo: 'Trámite sin costo', modalidad: 'Trámite en línea', url: 'Certificado'
  //   },
  // ];
}
