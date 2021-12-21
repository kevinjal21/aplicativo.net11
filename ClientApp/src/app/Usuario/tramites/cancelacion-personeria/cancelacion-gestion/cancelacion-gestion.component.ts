import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Documento } from 'src/app/models/documento';
import { Stramite } from 'src/app/models/stramite';
import { Tramite } from 'src/app/models/tramite';
import { AuthService } from 'src/app/services/auth.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { StramiteService } from 'src/app/services/stramite.service';

@Component({
  selector: 'app-cancelacion-gestion',
  templateUrl: './cancelacion-gestion.component.html',
  styleUrls: ['./cancelacion-gestion.component.css']
})
export class CancelacionGestionComponent implements OnInit {

  constructor(
    private servicioStramite: StramiteService, private servicioDocumentos: DocumentoService,
    private route: ActivatedRoute, private authService: AuthService) { }

  documentos: Documento[] = [];
  documentosCargados: Documento[] = [];
  documentosList: Documento[] = [];
  documento: Documento;
  solicitudTramite: Stramite;
  codeStramite: number;
  solicitudesT: Stramite[] = [];
  codigotramite: string;
  tramite: Tramite;
  color: string;

  ngOnInit() {
    this.solicitudTramite = { codstramite: 0, codtramite: 0, codusuario: 0, fecha: "", tipoTramite: "" };
    this.documento = { codocumento: 0, codstramite: 0, observacion: "", fechacreacion: "", fechaactualizacion: "", nombredoc: "", url: "", tamanio: 0, estado: "", plantilla: "", Archive: null }
    this.creacionDocumentosLigas();
    this.getAllDocumentos();
    this.codigotramite = this.route.snapshot.paramMap.get('id');
  }

  refresh(): void { window.location.reload(); }

  creacionDocumentosLigas() {
    this.servicioStramite.getStramite().subscribe(solic => {
      this.solicitudesT = solic
      var contador = 0;
      if (localStorage.getItem('tipoTramite') == "CLUB") {
        for (let index = 0; index < this.solicitudesT.length; index++) {
          const element = this.solicitudesT[index];
          if (element.codtramite == Number(this.route.snapshot.paramMap.get('id')) && element.codusuario == this.authService.getCodigoUserLocalStore() && element.tipoTramite == "CLUB") {
            contador++;
            this.codeStramite = element.codstramite;
          }
        }
        if (contador == 0) {
          this.solicitudTramite.codtramite = Number(this.route.snapshot.paramMap.get('id'));
          this.solicitudTramite.codusuario = this.authService.getCodigoUserLocalStore();
          this.solicitudTramite.tipoTramite = this.authService.getTipoTLocalStore();
          this.servicioStramite.addStramite(this.solicitudTramite).subscribe(res => {
            localStorage.setItem('codigosolicitud', res.codstramite.toString());
            this.crearDocumentosTramite4(res.codstramite);
          }, (err) => {
            console.log(err);
          }
          );
        }
      } else if (localStorage.getItem('tipoTramite') == "LIGAS") {
        for (let index = 0; index < this.solicitudesT.length; index++) {
          const element = this.solicitudesT[index];
          if (element.codtramite == Number(this.route.snapshot.paramMap.get('id')) && element.codusuario == this.authService.getCodigoUserLocalStore() && element.tipoTramite == "LIGAS") {
            contador++;
            this.codeStramite = element.codstramite;
          }
        }
        if (contador == 0) {
          this.solicitudTramite.codtramite = Number(this.route.snapshot.paramMap.get('id'));
          this.solicitudTramite.codusuario = this.authService.getCodigoUserLocalStore();
          this.solicitudTramite.tipoTramite = this.authService.getTipoTLocalStore();
          this.servicioStramite.addStramite(this.solicitudTramite).subscribe(res => {
            localStorage.setItem('codigosolicitud', res.codstramite.toString());
            this.crearDocumentosTramite4(res.codstramite);
          }, (err) => {
            console.log(err);
          }
          );
        }
      }
    });
  }

  crearDocumentosTramite4(codigoStramite: number) {
    //creamos cada uno de los documentos que nececitamos para el tramite de Cancelación de Personería Jurídica
    //Documento Acta de disolución del organismo deportivo
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Acta de disolución del Organismo Deportivo';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'Acta_Disolucion_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento Relación de socios convocados para la disolución de organismos deportivos
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Relación de socios para la disolución';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'Relacion_Socios_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    this.getAllDocumentos();
    this.refresh();
  }

  getAllDocumentos() {
    this.servicioDocumentos.getDocumentos().subscribe(documento => {
      this.documentos = documento
      this.filtarDocumentosListLigas();
      this.filtarDocumentosCargadosLigas();
    });
  }

  filtarDocumentosListLigas() {
    this.documentosList = [];
    for (let index = 0; index < this.documentos.length; index++) {
      const element = this.documentos[index];
      if (element.codstramite == this.codeStramite && (element.estado == "Nuevo" || element.estado == "Incorrecto")) {
        this.documentosList.push(element);
      }
    }
  }

  filtarDocumentosCargadosLigas() {
    for (let index = 0; index < this.documentos.length; index++) {
      const element = this.documentos[index];
      if (element.codstramite == this.codeStramite && element.estado != "Nuevo") {
        this.documentosCargados.push(element);
      }
    }
  }
}
