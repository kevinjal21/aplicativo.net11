import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stramite } from 'src/app/models/stramite';
import { Tramite } from 'src/app/models/tramite';
import { AuthService } from 'src/app/services/auth.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { StramiteService } from 'src/app/services/stramite.service';
import { TramiteService } from 'src/app/services/tramite.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Documento } from '../../models/documento';


@Component({
  selector: 'app-reconocimiento-personaria',
  templateUrl: './reconocimiento-personaria.component.html',
  styleUrls: ['./reconocimiento-personaria.component.css']
})

export class ReconocimientoPersonariaComponent implements OnInit {

  constructor(private router: Router, private servicioStramite: StramiteService,
    private servicioDocumentos: DocumentoService, private route: ActivatedRoute,
    private servicioTramites: TramiteService, private authService: AuthService) { }

  documentos: Documento[] = [];
  documentosCargados: Documento[] = [];
  documentosList: Documento[] = [];
  documento: Documento;
  solicitudTramite: Stramite;
  solicitudesT: Stramite[];
  tramite: Tramite;
  codigoUser: string = "";

  ngOnInit() {
    this.solicitudTramite = { codstramite: 0, codtramite: 0, codusuario: 0, fecha: "", tipoTramite: "" };
    this.documento = { codocumento: 0, codstramite: 0, observacion: "", fechacreacion: "", fechaactualizacion: "", nombredoc: "", url: "", tamanio: 0, estado: "", plantilla: "" ,Archive:null}
    this.creacionDocumentos();
    this.getAllDocumentos();
    this.codigoUser = this.route.snapshot.paramMap.get('id');
  }

  creacionDocumentos() {
    this.servicioStramite.getStramite().subscribe(solic => {
      this.solicitudesT = solic

      var contador = 0;
      for (let index = 0; index < this.solicitudesT.length; index++) {
        const element = this.solicitudesT[index];
        if (element.codtramite == Number(this.route.snapshot.paramMap.get('id')) && element.codusuario == this.authService.getCodigoUserLocalStore()) {
          contador++;
        }
      }

      if (contador == 0) {
        this.solicitudTramite.codtramite = Number(this.route.snapshot.paramMap.get('id'));
        this.solicitudTramite.codusuario = this.authService.getCodigoUserLocalStore();
        this.servicioStramite.addStramite(this.solicitudTramite)
          .subscribe(res => {
            localStorage.setItem('codigosolicitud', res.codstramite.toString());
            this.crearDocumentos(res.codstramite);
          }, (err) => {
            console.log(err);
          }
          );

      } else {

      }
    });
  }

  crearDocumentos(codigoStramite: number) {
    //creamos cada uno de los documentos que nececitamos para el tramite de reconocimiento de personeria
    //Documento Estatutos
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = 'Cargue los documento';
    this.documento.nombredoc = 'Estatutos';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'Estatutos_Plantilla.docx';
    this.documento.fechacreacion = '13/07/2021 8:34:09 a. m.';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento Acta de creación
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = 'Cargue los documento';
    this.documento.nombredoc = 'Acta de creación';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'Acta_Plantilla.docx';
    this.documento.fechacreacion = '13/07/2021 8:34:09 a. m.';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento Acta de asignación
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = 'Cargue los documento';
    this.documento.nombredoc = 'Acta de asignación';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'ActaAsig_Plantilla.docx';
    this.documento.fechacreacion = '13/07/2021 8:34:09 a. m.';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento CA Junta directiva
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = 'Cargue los documentos';
    this.documento.nombredoc = 'CA Junta directiva';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'CA_Junta_Di_Plantilla.docx';
    this.documento.fechacreacion = '13/07/2021 8:34:09 a. m.';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento FC Junta directiva
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = 'Cargue los documentos';
    this.documento.nombredoc = 'FC Junta directiva';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'FC_Junta_Di_Plantilla.docx';
    this.documento.fechacreacion = '13/07/2021 8:34:09 a. m.';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento Certificado Junta directiva
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = 'Cargue los documentos';
    this.documento.nombredoc = 'Certificado Junta directiva';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'Certificado_Junta_Di_Plantilla.docx';
    this.documento.fechacreacion = '13/07/2021 8:34:09 a. m.';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento CA Organo control
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = 'Cargue los documentos';
    this.documento.nombredoc = 'CA Organo control';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'CA_Organo_control_Plantilla.docx';
    this.documento.fechacreacion = '13/07/2021 8:34:09 a. m.';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento FC Organo control
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = 'Cargue los documentos';
    this.documento.nombredoc = 'FC Organo control';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'FC_Organo_cont_Plantilla.docx';
    this.documento.fechacreacion = '13/07/2021 8:34:09 a. m.';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento FTP Contador
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = 'Cargue los documentos';
    this.documento.nombredoc = 'FTP Contador';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'FTP_Contador_Plantilla.docx';
    this.documento.fechacreacion = '13/07/2021 8:34:09 a. m.';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento CA Miembros CD
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = 'Cargue los documentos';
    this.documento.nombredoc = 'CA Miembros CD';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'CA_Miembros_CD_Plantilla.docx';
    this.documento.fechacreacion = '13/07/2021 8:34:09 a. m.';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento FC Comision D
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = 'Cargue los documentos';
    this.documento.nombredoc = 'FC Comision D';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'FC_Comision_D_Plantilla.docx';
    this.documento.fechacreacion = '13/07/2021 8:34:09 a. m.';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
    //Documento F Reconocimiento D
    this.documento.codstramite = codigoStramite;
    this.documento.observacion = 'Cargue los documentos';
    this.documento.nombredoc = 'F Reconocimiento D';
    this.documento.url = '';
    this.documento.tamanio = 0;
    this.documento.estado = 'Nuevo';
    this.documento.plantilla = 'F_Reconocimiento_D_Plantilla.docx';
    this.documento.fechacreacion = '13/07/2021 8:34:09 a. m.';
    this.servicioDocumentos.addDocumento(this.documento).subscribe();
  }

  getAllDocumentos() {
    this.servicioDocumentos.getDocumentos().subscribe(documento => {
      this.documentos = documento
      this.filtarDocumentosCargados();
      this.filtarDocumentosList();
    });
  }

  filtarDocumentosList() {
    for (let index = 0; index < this.documentos.length; index++) {
      const element = this.documentos[index];
      if (element.codstramite == this.servicioStramite.getCodigoStramiteLocalStore()) {
        this.documentosList.push(element);
      }
    }
  }

  filtarDocumentosCargados() {
    for (let index = 0; index < this.documentos.length; index++) {
      const element = this.documentos[index];
      if (element.estado != "Nuevo") {
        this.documentosCargados.push(element);
      }
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
