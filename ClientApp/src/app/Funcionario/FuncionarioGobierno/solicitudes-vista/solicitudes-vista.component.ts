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
  selector: 'app-solicitudes-vista',
  templateUrl: './solicitudes-vista.component.html',
  styleUrls: ['./solicitudes-vista.component.css']
})
export class SolicitudesVistaComponent implements OnInit {

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
  funcionarioDeporte: Usuario;
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
      console.log("solisitud: "+this.solicitud.codFuncionario)
      this.agregarIdFuncionario();
      console.log("solisitud2: "+this.solicitud.codFuncionario)
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

  getUsuario() {
    this.servicioUsuario.get(this.solicitud.codusuario).subscribe(usu => this.usuario = usu);
    this.servicioUsuario.get(this.solicitud.codFuncionario).subscribe(usua => this.funcionarioDeporte = usua);
  }

  getTramite() {
    this.servicioTramite.get(this.solicitud.codtramite).subscribe(tram => this.tramite = tram);
  }

  getAllDocumentos() {
    this.servicioDocumentos.getDocumentos().subscribe(documento => {
      this.documentos = documento
      this.filtarDocumentos();
    });
  }

  filtarDocumentos() {
    this.documentosFiltrados = [];
    for (let index = 0; index < this.documentos.length; index++) {
      const element = this.documentos[index];
      if (element.codstramite == Number(this.route.snapshot.paramMap.get('idSoli')) ) {
        this.documentosFiltrados.push(element);
      }
    }
  }
}