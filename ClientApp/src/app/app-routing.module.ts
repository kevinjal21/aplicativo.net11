import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarseComponent } from './login/registrarse/registrarse.component';
import { IngresarComponent } from './login/ingresar/ingresar.component';
import { AuthGuard } from './auth/auth.guard';
import { ModuloAdminComponent } from './inicio/modulo-admin/modulo-admin.component';
import { ModuloFuncionarioComponent } from './inicio/modulo-funcionario/modulo-funcionario.component';
import { ModuloUsuarioComponent } from './inicio/modulo-usuario/modulo-usuario.component';
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
import { ConfirmarCuentaComponent } from './login/confirmar-cuenta/confirmar-cuenta.component';
import { Eror404Component } from './inicio/eror404/eror404.component';
import { ReconocimientoGestioLigaComponent } from './Usuario/tramites/reconocimiento-personeria/reconocimiento-gestio-liga/reconocimiento-gestio-liga.component';
import { ReconocimientoGestioClubComponent } from './Usuario/tramites/reconocimiento-personeria/reconocimiento-gestio-club/reconocimiento-gestio-club.component';
import { VistaComponent } from './Usuario/tramites/reconocimiento-personeria/vista/vista.component';
import { TramitesComponent } from './Usuario/tramites/tramites/tramites.component';
import { SeletionTipoTramiteComponent } from './Usuario/tramites/reconocimiento-personeria/seletion-tipo-tramite/seletion-tipo-tramite.component';
import { CargaDocumentoLigaComponent } from './Usuario/tramites/reconocimiento-personeria/carga-documento-liga/carga-documento-liga.component';
import { CargaDocumentoClubComponent } from './Usuario/tramites/reconocimiento-personeria/carga-documento-club/carga-documento-club.component';
import { DatosPersonalesComponent } from './Usuario/datos-personales/datos-personales.component';
import { SelectionTipoTramiteIComponent } from './Usuario/tramites/inscripcion-dignatarios/selection-tipo-tramite-i/selection-tipo-tramite-i.component';
import { InscripcionGestionComponent } from './Usuario/tramites/inscripcion-dignatarios/inscripcion-gestion/inscripcion-gestion.component';
import { SelectionTipoTramiteAComponent } from './Usuario/tramites/aprobacion-reformas/selection-tipo-tramite-a/selection-tipo-tramite-a.component';
import { SelectionTipoTramiteCComponent } from './Usuario/tramites/cancelacion-personeria/selection-tipo-tramite-c/selection-tipo-tramite-c.component';
import { SelectionTipoTramiteCeComponent } from './Usuario/tramites/certificado-existencia/selection-tipo-tramite-ce/selection-tipo-tramite-ce.component';
import { AprobacionGestionComponent } from './Usuario/tramites/aprobacion-reformas/aprobacion-gestion/aprobacion-gestion.component';
import { CancelacionGestionComponent } from './Usuario/tramites/cancelacion-personeria/cancelacion-gestion/cancelacion-gestion.component';
import { CertificadoGestionComponent } from './Usuario/tramites/certificado-existencia/certificado-gestion/certificado-gestion.component';
import { CargaDocumentoInscripcionComponent } from './Usuario/tramites/inscripcion-dignatarios/carga-documento-inscripcion/carga-documento-inscripcion.component';
import { CargaDocumentoAprobacionComponent } from './Usuario/tramites/aprobacion-reformas/carga-documento-aprobacion/carga-documento-aprobacion.component';
import { CargaDocumentoCancelacionComponent } from './Usuario/tramites/cancelacion-personeria/carga-documento-cancelacion/carga-documento-cancelacion.component';
import { CargaDocumentoCertificadoComponent } from './Usuario/tramites/certificado-existencia/carga-documento-certificado/carga-documento-certificado.component';
import { ModuloAddUserComponent } from './inicio/modulo-admin/modulo-add-user/modulo-add-user.component';
import { AddFuncionarioDeporteComponent } from './Administrador/GestionFuncionarios/add-funcionario-deporte/add-funcionario-deporte.component';
import { EditElimFuncionarioDeporteComponent } from './Administrador/GestionFuncionarios/edit-elim-funcionario-deporte/edit-elim-funcionario-deporte.component';
import { AddFuncionarioGobiernoComponent } from './Administrador/GestionFuncionarios/add-funcionario-gobierno/add-funcionario-gobierno.component';
import { EditElimFuncionarioGobiernoComponent } from './Administrador/GestionFuncionarios/edit-elim-funcionario-gobierno/edit-elim-funcionario-gobierno.component';
import { SolicitudesComponent } from './Funcionario/FuncionarioDeporte/solicitudes/solicitudes.component';
import { SolicitudGestionComponent } from './Funcionario/FuncionarioDeporte/solicitud-gestion/solicitud-gestion.component';
import { DatosPersonalesDComponent } from './Funcionario/FuncionarioDeporte/datos-personales-d/datos-personales-d.component';
import { ModuloFuncionarioGobiernoComponent } from './inicio/modulo-funcionario-gobierno/modulo-funcionario-gobierno.component';
import { AuthFuncionariGobiernoGuard } from './auth/auth-funcionari-gobierno.guard';
import { DatosPersonalesGComponent } from './Funcionario/FuncionarioGobierno/datos-personales-g/datos-personales-g.component';
import { SolicitudesVistaComponent } from './Funcionario/FuncionarioGobierno/solicitudes-vista/solicitudes-vista.component';
import { SolicitudesgComponent } from './Funcionario/FuncionarioGobierno/solicitudesg/solicitudesg.component';
import { CambiarClaveComponent } from './Usuario/cambiar-clave/cambiar-clave.component';
import { Vista1aproComponent } from './tramites/vista1apro/vista1apro.component';
import { Vista1canComponent } from './tramites/vista1can/vista1can.component';
import { Vista1certComponent } from './tramites/vista1cert/vista1cert.component';
import { Vista1insComponent } from './tramites/vista1ins/vista1ins.component';
import { Vista1recoComponent } from './tramites/vista1reco/vista1reco.component';
import { HistorialComponent } from './Usuario/tramites/historial/historial.component';
import { DetallesComponent } from './Usuario/tramites/historial/detalles/detalles.component';

const routes: Routes = [
  { path: '', redirectTo: 'Ingresar', pathMatch: 'full' },
  { path: 'PageNotFound', component: Eror404Component },
  { path: 'Inicio', component: InicioComponent },
  { path: 'login/ConfirmacionCuenta/:token/:correo', component: ConfirmarCuentaComponent },
  { path: 'Registrarse', component: RegistrarseComponent },
  { path: 'Ingresar', component: IngresarComponent },
  { path: 'login/identify', component: RecuperarClaveComponent },
  { path: 'login/Restablecer/:token/:correo', component: RestablecerClaveComponent },
  { path: 'Aprobacionvista1', component: Vista1aproComponent },
  { path: 'Cancelacionvista1', component: Vista1canComponent },
  { path: 'Inscripcionvista1', component: Vista1insComponent },
  { path: 'Certificadovista1', component: Vista1certComponent },
  { path: 'Reconocimientovista1', component: Vista1recoComponent },


  //RUTAS PARA ADMIN
  { path: 'AddUsuarioDeporte', component: AddFuncionarioDeporteComponent, canActivate: [AuthadminGuard] },
  { path: 'detalleFuncionarioDeporte/:id', component: EditElimFuncionarioDeporteComponent, canActivate: [AuthadminGuard] },
  { path: 'AddUsuarioGobierno', component: AddFuncionarioGobiernoComponent, canActivate: [AuthadminGuard] },
  { path: 'detalleFuncionarioGobierno/:id', component: EditElimFuncionarioGobiernoComponent, canActivate: [AuthadminGuard] },
  { path: 'InicioAdmin', component: ModuloAdminComponent, canActivate: [AuthadminGuard] },
  { path: 'InicioAdminAdd', component: ModuloAddUserComponent, canActivate: [AuthadminGuard] },


  //RUTAS PARA USUARIOS

  { path: 'InicioUsuario', component: ModuloUsuarioComponent, canActivate: [AuthGuard] },
  { path: 'Historial', component: HistorialComponent, canActivate: [AuthGuard] },
  { path: 'CambiarClave/:token/:correo', component: CambiarClaveComponent, canActivate: [AuthGuard] },
  { path: 'Tramites', component: TramitesComponent, canActivate: [AuthGuard] },
  { path: 'Aprobacionvista', component: VistaaproComponent, canActivate: [AuthGuard] },
  { path: 'Cancelacionvista', component: VistacanComponent, canActivate: [AuthGuard] },
  { path: 'Inscripcionvista', component: VistainsComponent, canActivate: [AuthGuard] },
  { path: 'Certificadovista', component: VistacertComponent, canActivate: [AuthGuard] },
  { path: 'Reconocimientovista', component: VistaComponent, canActivate: [AuthGuard] },
  { path: 'ReconocimientoGestionLigas/:id', component: ReconocimientoGestioLigaComponent, canActivate: [AuthGuard] },
  { path: 'ReconocimientoGestionClub/:id', component: ReconocimientoGestioClubComponent, canActivate: [AuthGuard] },
  { path: 'InscripcionGestion/:id', component: InscripcionGestionComponent, canActivate: [AuthGuard] },
  { path: 'AprobacionGestion/:id', component: AprobacionGestionComponent, canActivate: [AuthGuard] },
  { path: 'CancelacionGestion/:id', component: CancelacionGestionComponent, canActivate: [AuthGuard] },
  { path: 'CertificadoGestion/:id', component: CertificadoGestionComponent, canActivate: [AuthGuard] },
  { path: 'ReconocimientoSelection/:id', component: SeletionTipoTramiteComponent, canActivate: [AuthGuard] },
  { path: 'InscripcionSelection/:id', component: SelectionTipoTramiteIComponent, canActivate: [AuthGuard] },
  { path: 'AprobacionSelection/:id', component: SelectionTipoTramiteAComponent, canActivate: [AuthGuard] },
  { path: 'CancelacionSelection/:id', component: SelectionTipoTramiteCComponent, canActivate: [AuthGuard] },
  { path: 'CertificadoSelection/:id', component: SelectionTipoTramiteCeComponent, canActivate: [AuthGuard] },

  { path: 'CargarDocumentoRLigas/:id/:codt', component: CargaDocumentoLigaComponent, canActivate: [AuthGuard] },
  { path: 'CargarDocumentoRClub/:id/:codt', component: CargaDocumentoClubComponent, canActivate: [AuthGuard] },
  { path: 'CargarDocumentoInscripcion/:id/:codt', component: CargaDocumentoInscripcionComponent, canActivate: [AuthGuard] },
  { path: 'CargarDocumentoAprobacion/:id/:codt', component: CargaDocumentoAprobacionComponent, canActivate: [AuthGuard] },
  { path: 'CargarDocumentoCancelacion/:id/:codt', component: CargaDocumentoCancelacionComponent, canActivate: [AuthGuard] },
  { path: 'CargarDocumentoCertificado/:id/:codt', component: CargaDocumentoCertificadoComponent, canActivate: [AuthGuard] },
  { path: 'DatosPersonales', component: DatosPersonalesComponent, canActivate: [AuthGuard] },
  { path: 'Detalles/:detalleC', component: DetallesComponent, canActivate: [AuthGuard] },


  //RUTAS PARA FUNCIONARIO DEPORTE
  { path: 'InicioFuncionarioDeporte', component: ModuloFuncionarioComponent, canActivate: [AuthFuncionarioGuard] },
  { path: 'Solicitudes', component: SolicitudesComponent, canActivate: [AuthFuncionarioGuard] },
  { path: 'GestionSolicitudes/:idSoli', component: SolicitudGestionComponent, canActivate: [AuthFuncionarioGuard] },
  { path: 'DatosPersonalesFun', component: DatosPersonalesDComponent, canActivate: [AuthFuncionarioGuard] },

  //RUTAS PARA FUNCIONARIO GOBIERNO
  { path: 'InicioFuncionarioGobierno', component: ModuloFuncionarioGobiernoComponent, canActivate: [AuthFuncionariGobiernoGuard] },
  { path: 'DatosPersonalesFung', component: DatosPersonalesGComponent, canActivate: [AuthFuncionariGobiernoGuard] },
  { path: 'Solicitudesg', component: SolicitudesgComponent, canActivate: [AuthFuncionariGobiernoGuard] },
  { path: 'VerSolicitudes/:idSoli', component: SolicitudesVistaComponent, canActivate: [AuthFuncionariGobiernoGuard] },


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
