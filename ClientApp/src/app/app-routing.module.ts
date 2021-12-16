import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarseComponent } from './login/registrarse/registrarse.component';
import { IngresarComponent } from './login/ingresar/ingresar.component';
import { AddusuarioComponent } from './Administrador/addusuario/addusuario.component';
import { AuthGuard } from './auth/auth.guard';
import { ModuloAdminComponent } from './inicio/modulo-admin/modulo-admin.component';
import { ModuloFuncionarioComponent } from './inicio/modulo-funcionario/modulo-funcionario.component';
import { ModuloUsuarioComponent } from './inicio/modulo-usuario/modulo-usuario.component';
import { EditElimUsuarioComponent } from './Administrador/edit-elim-usuario/edit-elim-usuario.component';
import { SolicitudesListComponent } from './Funcionario/solicitudes-list/solicitudes-list.component';
import { VistaaproComponent } from './Usuario/tramites/aprobacion-reformas/vistaapro/vistaapro.component';
import { VistacanComponent } from './Usuario/tramites/cancelacion-personeria/vistacan/vistacan.component';
import { VistainsComponent } from './Usuario/tramites/inscripcion-dignatarios/vistains/vistains.component';
import { VistacertComponent } from './Usuario/tramites/certificado-existencia/vistacert/vistacert.component';
import { InscripcionDignatariosComponent } from './Usuario/tramites/inscripcion-dignatarios/inscripcion-dignatarios.component';
import { AprobacionReformasComponent } from './Usuario/tramites/aprobacion-reformas/aprobacion-reformas.component';
import { CancelacionPersoneriaComponent } from './Usuario/tramites/cancelacion-personeria/cancelacion-personeria.component';
import { CertificadoExistenciaComponent } from './Usuario/tramites/certificado-existencia/certificado-existencia.component';
import { RecuperarClaveComponent } from './login/recuperar-clave/recuperar-clave.component';
import { RestablecerClaveComponent } from './login/restablecer-clave/restablecer-clave.component';
import { AuthadminGuard } from './auth/authadmin.guard';
import { AuthFuncionarioGuard } from './auth/auth-funcionario.guard';
import { GestionSolicitudComponent } from './Funcionario/gestion-solicitud/gestion-solicitud.component';
import { ConfirmarCuentaComponent } from './login/confirmar-cuenta/confirmar-cuenta.component';
import { Eror404Component } from './inicio/eror404/eror404.component';
import { ReconocimientoGestioLigaComponent } from './Usuario/tramites/reconocimiento-personeria/reconocimiento-gestio-liga/reconocimiento-gestio-liga.component';
import { ReconocimientoGestioClubComponent } from './Usuario/tramites/reconocimiento-personeria/reconocimiento-gestio-club/reconocimiento-gestio-club.component';
import { VistaComponent } from './Usuario/tramites/reconocimiento-personeria/vista/vista.component';
import { TramitesComponent } from './Usuario/tramites/tramites/tramites.component';
import { SeletionTipoTramiteComponent } from './Usuario/tramites/reconocimiento-personeria/seletion-tipo-tramite/seletion-tipo-tramite.component';
import { CargaDocumentoLigaComponent } from './Usuario/tramites/reconocimiento-personeria/carga-documento-liga/carga-documento-liga.component';
import { CargaDocumentoClubComponent } from './Usuario/tramites/reconocimiento-personeria/carga-documento-club/carga-documento-club.component';

const routes: Routes = [
  { path: '', redirectTo: 'Ingresar', pathMatch: 'full' },
  { path: 'PageNotFound', component: Eror404Component },
  { path: 'Inicio', component: InicioComponent },
  { path: 'login/ConfirmacionCuenta/:token/:correo', component: ConfirmarCuentaComponent },
  { path: 'InicioAdmin', component: ModuloAdminComponent },
  { path: 'InicioFuncionario', component: ModuloFuncionarioComponent },
  { path: 'InicioUsuario', component: ModuloUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'Registrarse', component: RegistrarseComponent },
  { path: 'Ingresar', component: IngresarComponent },
  { path: 'login/identify', component: RecuperarClaveComponent },
  { path: 'login/Restablecer/:token/:correo', component: RestablecerClaveComponent },
  { path: 'Reconocimientovista', component: VistaComponent },
  { path: 'Aprobacionvista', component: VistaaproComponent },
  { path: 'Cancelacionvista', component: VistacanComponent },
  { path: 'Inscripcionvista', component: VistainsComponent },
  { path: 'Certificadovista', component: VistacertComponent },

  //RUTAS PARA ADMIN
  { path: 'Addusuario', component: AddusuarioComponent, canActivate: [AuthadminGuard] },
  { path: 'detalleUsuarioF/:id', component: EditElimUsuarioComponent, canActivate: [AuthadminGuard] },

  //RUTAS PARA USUARIOS
  { path: 'Tramites', component: TramitesComponent, canActivate: [AuthGuard] },
  { path: 'ReconocimientoGestion', component: ReconocimientoGestioLigaComponent, canActivate: [AuthGuard] },
  { path: 'ReconocimientoGestionLigas/:id', component: ReconocimientoGestioLigaComponent, canActivate: [AuthGuard] },
  { path: 'ReconocimientoGestionClub/:id', component: ReconocimientoGestioClubComponent, canActivate: [AuthGuard] },
  { path: 'ReconocimientoSelection/:id', component: SeletionTipoTramiteComponent, canActivate: [AuthGuard] },
  { path: 'CargarDocumentoRLigas/:id/:codt', component: CargaDocumentoLigaComponent, canActivate: [AuthGuard] },
  { path: 'CargarDocumentoRClub/:id/:codt', component: CargaDocumentoClubComponent, canActivate: [AuthGuard] },


  //RUTAS PARA FUNCIONARIO
  { path: 'Solicitudes', component: SolicitudesListComponent, canActivate: [AuthFuncionarioGuard] },
  { path: 'GestionSolicitudes/:idSoli', component: GestionSolicitudComponent, canActivate: [AuthFuncionarioGuard] },

  { path: 'Inscripcion', component: InscripcionDignatariosComponent },
  { path: 'Aprobacion', component: AprobacionReformasComponent },
  { path: 'Cancelacion', component: CancelacionPersoneriaComponent },
  { path: 'Certificado', component: CertificadoExistenciaComponent },

  { path: '**', redirectTo: 'PageNotFound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }