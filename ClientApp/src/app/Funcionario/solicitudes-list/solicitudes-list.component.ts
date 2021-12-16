import { Component, OnInit } from '@angular/core';
import { Stramite } from '../../models/stramite';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { StramiteService } from 'src/app/services/stramite.service';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Tramite } from '../../models/tramite';
import { TramiteService } from 'src/app/services/tramite.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-solicitudes-list',
  templateUrl: './solicitudes-list.component.html',
  styleUrls: ['./solicitudes-list.component.css']
})
export class SolicitudesListComponent implements OnInit {


  listasolisitud: Stramite[] = [];
  solicitudes: Stramite[] = [];
  filtrarUser = '';
  usuarios: Usuario[] = [];
  usuariosList: Usuario[] = [];
  tramites: Tramite[] = [];
  tramitesList: Tramite[] = [];

  TipoDato!: string;
  confirmacionClave!: string;
  checkbox!: boolean;

  constructor(private serviciosTramite: TramiteService,
    private solicitudService: StramiteService,
    private router: Router,
    private location: Location,
    private servicioUsuario: UsuarioService
  ) {
  }

  ngOnInit(): void {
    this.getAllUsuarios();
  }

  goBack(): void {
    this.location.back();
  }

  getAllUsuarios() {
    // this.usuariosList = new Usuario[];
   
    this.solicitudService.getStramite().subscribe(soli => {
      this.solicitudes = soli
      for (let index = 0; index < this.solicitudes.length; index++) {
        const element = this.solicitudes[index];
        this.servicioUsuario.getUsuario().subscribe(user => {
          this.usuarios = user
          for (let index = 0; index < this.usuarios.length; index++) {
            const element1 = this.usuarios[index];
            if (element.codusuario == element1.codusuario) {
              this.usuariosList.push(element1);
            }
          }
        });
        this.serviciosTramite.getTramite().subscribe(tra => {
          this.tramites = tra
          for (let index = 0; index < this.tramites.length; index++) {
            const element2 = this.tramites[index];
            if (element.codtramite == element2.codtramite) {
              this.tramitesList.push(element2);
            }
          }
        }
        )
      }
    });
  }

}

