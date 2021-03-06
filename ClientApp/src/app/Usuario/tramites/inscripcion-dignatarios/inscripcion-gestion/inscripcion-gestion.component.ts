import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Documento } from 'src/app/models/documento';
import { Stramite } from 'src/app/models/stramite';
import { Tramite } from 'src/app/models/tramite';
import { AuthService } from 'src/app/services/auth.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { StramiteService } from 'src/app/services/stramite.service';

@Component({
  selector: 'app-inscripcion-gestion',
  templateUrl: './inscripcion-gestion.component.html',
  styleUrls: ['./inscripcion-gestion.component.css']
})
export class InscripcionGestionComponent implements OnInit {


  constructor(
    private servicioStramite: StramiteService, private servicioDocumentos: DocumentoService,
    private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

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
  tipotramite: string;
  ngOnInit() {
    this.tipotramite = this.authService.getTipoTLocalStore();
    this.solicitudTramite = { codstramite: 0, codtramite: 0, codusuario: 0, fecha: "", tipoTramite: "", codFuncionario: 0, estado: "" };
    this.documento = { codocumento: 0, codstramite: 0, observacion: "", fechacreacion: "", fechaactualizacion: "", nombredoc: "", url: "", tamanio: 0, estado: "", plantilla: "", Archive: null }
    this.creacionDocumentosLigas();
    this.getAllDocumentos();
    this.codigotramite = this.route.snapshot.paramMap.get('id');
  }
  cancelar()
  {
    this.router.navigate(['Tramites']);

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
          this.solicitudTramite.estado = "EN PROCESO";
          this.servicioStramite.addStramite(this.solicitudTramite).subscribe(res => {
            localStorage.setItem('codigosolicitud', res.codstramite.toString());
            this.crearDocumentosTramite2(res.codstramite);
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
            this.crearDocumentosTramite2(res.codstramite);
          }, (err) => {
            console.log(err);
          }
          );
        }
      }
    });
  }

  crearDocumentosTramite2(codigoStramite: number) {
    //creamos cada uno de los documentos que nececitamos para el tramite de INSCRIPCI??N DE DIGNATARIOS DE LOS ORGANISMOS DEPORTIVOS Y RECREATIVOS
    //Documento Actas de eleccion de los miembros
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Actas de elecci??n de los miembros';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'Acta_Elecion_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento Certificado de idoneidad
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Certificado de idoneidad';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'C_Idoneidad_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento Carta de aceptaci??n de cargos
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Carta de aceptaci??n de cargos';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'Carta_Aceptacion_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento Copia Reconocimiento Deportivo
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Copia Reconocimiento Deportivo';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'Copia_Reconocimiento_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    this.getAllDocumentos();
    this.refresh();
  }

  crearDocumentosTramite3(codigoStramite: number) {
    //creamos cada uno de los documentos que nececitamos para el tramite de Aprobaci??n de reformas estatutarias
    //Documento Acta de modificaci??n de estatutos
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Acta de modificaci??n de estatutos';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'Estatutos_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento Fotocopia de los estatutos nuevos
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Copia de los estatutos nuevos';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'Estatutos_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    this.getAllDocumentos();
    this.refresh();
  }

  crearDocumentosTramite4(codigoStramite: number) {
    //creamos cada uno de los documentos que nececitamos para el tramite de Cancelaci??n de Personer??a Jur??dica
    //Documento Acta de disoluci??n del organismo deportivo
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Acta de disoluci??n del Organismo Deportivo';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'Estatutos_Plantilla.docx';
    this.documento.fechacreacion = '';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento Relaci??n de socios convocados para la disoluci??n de organismos deportivos
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = '';
    this.documento.nombredoc = 'Relaci??n de socios para la disoluci??n';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'Estatutos_Plantilla.docx';
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
