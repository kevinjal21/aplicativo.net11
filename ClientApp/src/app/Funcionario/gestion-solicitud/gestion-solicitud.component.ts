import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Documento } from 'src/app/models/documento';
import { Stramite } from 'src/app/models/stramite';
import { Tramite } from 'src/app/models/tramite';
import { AuthService } from 'src/app/services/auth.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { StramiteService } from 'src/app/services/stramite.service';
import { TramiteService } from 'src/app/services/tramite.service';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { ConfirmarCuentaComponent } from '../../login/confirmar-cuenta/confirmar-cuenta.component';

@Component({
  selector: 'app-gestion-solicitud',
  templateUrl: './gestion-solicitud.component.html',
  styleUrls: ['./gestion-solicitud.component.css']
})
export class GestionSolicitudComponent implements OnInit {

  constructor(private router: Router, private servicioStramite: StramiteService,
    private servicioDocumentos: DocumentoService, private route: ActivatedRoute,
    private servicioTramite: TramiteService, private authService: AuthService,
    private servicioUsuario: UsuarioService) { }

  documentos: Documento[] = [];
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
      this.getTramite();
      this.getUsuario();
    });
  }

  observacion(documento: Documento) {
    documento.observacion = this.obser;
    documento.estado = "Incorrecto";
    this.servicioDocumentos.update(documento).subscribe(doc => this.documentos = doc);
    this.getAllDocumentos();
    this.refresh();
  }

  correcto(documento: Documento) {
    documento.observacion = "CORRECTO";
    documento.estado = "Verificación exitosa.";
    this.servicioDocumentos.update(documento).subscribe(doc => this.documentos = doc);
    this.getAllDocumentos();
    this.refresh();
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
      this.filtarDocumentos();
      this.filtarDocumentosRevisados();
    });
  }

  filtarDocumentos() {
    this.documentosFiltrados=[];
    for (let index = 0; index < this.documentos.length; index++) {
      const element = this.documentos[index];
      if (element.codstramite == Number(this.route.snapshot.paramMap.get('idSoli')) && element.observacion!="CORRECTO" && element.observacion=="" && element.estado != "Nuevo") {
        this.documentosFiltrados.push(element);
      }
    }
  }

  filtarDocumentosRevisados() {
    this.documentosFiltradosRev=[];
    for (let index = 0; index < this.documentos.length; index++) {
      const element = this.documentos[index];
      if (element.codstramite == Number(this.route.snapshot.paramMap.get('idSoli')) && element.estado != "En proceso" && element.estado != "Cargado" && element.estado != "Nuevo") {
        this.documentosFiltradosRev.push(element);
      }
    }
  }
}
