import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Documento } from 'src/app/models/documento';
import { Stramite } from 'src/app/models/stramite';
import { Tramite } from 'src/app/models/tramite';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { StramiteService } from 'src/app/services/stramite.service';
import { TramiteService } from 'src/app/services/tramite.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-solicitud-gestion',
  templateUrl: './solicitud-gestion.component.html',
  styleUrls: ['./solicitud-gestion.component.css']
})
export class SolicitudGestionComponent implements OnInit {

  constructor(private router: Router, private servicioStramite: StramiteService,
    private servicioDocumentos: DocumentoService, private route: ActivatedRoute,
    private servicioTramite: TramiteService, private authService: AuthService,
    private servicioUsuario: UsuarioService) { }

  documentos: Documento[] = [];
  documentosStramite: Documento[] = [];
  documentosFiltrados: Documento[] = [];
  documentosFiltradosRev: Documento[] = [];

  solicitud: Stramite;
  tramite: Tramite;
  usuario: Usuario;
  obser: string = '';

  ngOnInit() {
    this.getSoticitud();
    this.getAllDocumentos();
  }
  UserId: string;
  Firstname: string;
  Lastname: string;
  Email: string;

  onClick(event) {
    this.UserId = event.target.id;
    this.Firstname = document.getElementById("firstname" + this.UserId).innerHTML;
    this.Lastname = document.getElementById("lastname" + this.UserId).innerHTML;
    this.Email = document.getElementById("email" + this.UserId).innerHTML;
  }

  addestu() {

  }

  refresh(): void { window.location.reload(); }

  getSoticitud() {
    this.servicioStramite.get(this.route.snapshot.paramMap.get('idSoli')).subscribe(solic => {
      this.solicitud = solic
      this.agregarIdFuncionario();
      this.getTramite();
      this.getUsuario();
    });
  }

  agregarIdFuncionario() {
    if (this.solicitud.codFuncionario == 0) {
      this.solicitud.codFuncionario = this.authService.getCodigoUserLocalStore();
      this.servicioStramite.update(this.solicitud).subscribe();
    }
  }

  // observacion(documento: Documento) {
  //   documento.observacion = this.obser;
  //   documento.estado = "Incorrecto";
  //   this.servicioDocumentos.update(documento).subscribe(doc => this.documentos = doc);
  //   this.getAllDocumentos();
  //   this.refresh();
  // }

  // correcto(documento: Documento) {
  //   documento.observacion = "CORRECTO";
  //   documento.estado = "Verificación exitosa.";
  //   this.servicioDocumentos.update(documento).subscribe(doc => this.documentos = doc);
  //   this.getAllDocumentos();
  //   this.refresh();
  // }

  revisar(documento: Documento) {
    if (this.obser == null || this.obser == "") {
      documento.observacion = "CORRECTO";
      documento.estado = "Verificación exitosa.";
      this.servicioDocumentos.update(documento).subscribe();
      this.getAllDocumentos();
      this.refresh();
    } else {
      documento.observacion = this.obser;
      documento.estado = "Incorrecto";
      this.servicioDocumentos.update(documento).subscribe();
      this.getAllDocumentos();
      this.refresh();
    }
  }

  getUsuario() {
    this.servicioUsuario.get(this.solicitud.codusuario).subscribe(usu => this.usuario = usu);
  }

  getTramite() {
    this.servicioTramite.get(this.solicitud.codtramite).subscribe(tram => this.tramite = tram);
  }

  getAllDocumentos() {
    this.servicioDocumentos.getDocumentos().subscribe(documento => {
      this.documentos = documento
      this.getDocumentosStramite();
      this.EstadoStramite();
      this.filtarDocumentos();
      this.filtarDocumentosRevisados();
    });
  }

  getDocumentosStramite() {
    this.documentosStramite = [];
    for (let index = 0; index < this.documentos.length; index++) {
      const element = this.documentos[index];
      if (element.codstramite == Number(this.route.snapshot.paramMap.get('idSoli'))) {
        this.documentosStramite.push(element);
      }
    }
  }

  EstadoStramite() {
    var contador = 0;
    for (let index = 0; index < this.documentosStramite.length; index++) {
      const element = this.documentosStramite[index];
      if (element.estado != "Verificación exitosa.") {
        contador++;
      }
    }
    console.log("El Contador es: " + contador)
    if (contador != 0) {
      this.solicitud.estado = "CORRECTO";
      this.servicioStramite.update(this.solicitud).subscribe(soli => this.solicitud = soli);
    }
  }

  filtarDocumentos() {
    this.documentosFiltrados = [];
    for (let index = 0; index < this.documentosStramite.length; index++) {
      const element = this.documentosStramite[index];
      if (element.observacion != "CORRECTO" && element.observacion == "" && element.estado != "Nuevo") {
        this.documentosFiltrados.push(element);
      }
    }
  }

  filtarDocumentosRevisados() {
    this.documentosFiltradosRev = [];
    for (let index = 0; index < this.documentosStramite.length; index++) {
      const element = this.documentosStramite[index];
      if (element.estado != "En proceso" && element.estado != "Cargado" && element.estado != "Nuevo") {
        this.documentosFiltradosRev.push(element);
      }
    }
  }
}