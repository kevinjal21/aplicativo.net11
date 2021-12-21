import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { IngresarComponent } from './login/ingresar/ingresar.component';
import { RegistrarseComponent } from './login/registrarse/registrarse.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FiltroTramitesPipe } from './pipe/filtro-tramites.pipe';
import { AddusuarioComponent } from './Administrador/addusuario/addusuario.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { MenusesionComponent } from './menu/menusesion/menusesion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MenuadminsesionComponent } from './menu/menuadminsesion/menuadminsesion.component';
import { ModuloFuncionarioComponent } from './inicio/modulo-funcionario/modulo-funcionario.component';
import { ModuloAdminComponent } from './inicio/modulo-admin/modulo-admin.component';
import { ModuloUsuarioComponent } from './inicio/modulo-usuario/modulo-usuario.component';
import { MenuFuncionarioComponent } from './menu/menu-funcionario/menu-funcionario.component';
import { FiltroUsuarioFPipe } from './pipe/filtro-usuario-f.pipe';
import { EditElimUsuarioComponent } from './Administrador/edit-elim-usuario/edit-elim-usuario.component';
import { SolicitudesListComponent } from './Funcionario/solicitudes-list/solicitudes-list.component';
import { TramitesComponent } from './Usuario/tramites/tramites/tramites.component';
import { InscripcionDignatariosComponent } from './Usuario/tramites/inscripcion-dignatarios/inscripcion-dignatarios.component';
import { CancelacionPersoneriaComponent } from './Usuario/tramites/cancelacion-personeria/cancelacion-personeria.component';
import { AprobacionReformasComponent } from './Usuario/tramites/aprobacion-reformas/aprobacion-reformas.component';
import { VistainsComponent } from './Usuario/tramites/inscripcion-dignatarios/vistains/vistains.component';
import { VistacanComponent } from './Usuario/tramites/cancelacion-personeria/vistacan/vistacan.component';
import { VistaaproComponent } from './Usuario/tramites/aprobacion-reformas/vistaapro/vistaapro.component';
import { CertificadoExistenciaComponent } from './Usuario/tramites/certificado-existencia/certificado-existencia.component';
import { VistacertComponent } from './Usuario/tramites/certificado-existencia/vistacert/vistacert.component';
import { RecuperarClaveComponent } from './login/recuperar-clave/recuperar-clave.component';
import { RestablecerClaveComponent } from './login/restablecer-clave/restablecer-clave.component';
import { GestionSolicitudComponent } from './Funcionario/gestion-solicitud/gestion-solicitud.component';
import { ConfirmarCuentaComponent } from './login/confirmar-cuenta/confirmar-cuenta.component';
import { Eror404Component } from './inicio/eror404/eror404.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReconocimientoGestioClubComponent } from './Usuario/tramites/reconocimiento-personeria/reconocimiento-gestio-club/reconocimiento-gestio-club.component';
import { ReconocimientoGestioLigaComponent } from './Usuario/tramites/reconocimiento-personeria/reconocimiento-gestio-liga/reconocimiento-gestio-liga.component';
import { ReconocimientoPersonariaComponent } from './Usuario/tramites/reconocimiento-personeria/reconocimiento-personaria.component';
import { VistaComponent } from './Usuario/tramites/reconocimiento-personeria/vista/vista.component';
import { SeletionTipoTramiteComponent } from './Usuario/tramites/reconocimiento-personeria/seletion-tipo-tramite/seletion-tipo-tramite.component';
import { CargaDocumentoLigaComponent } from './Usuario/tramites/reconocimiento-personeria/carga-documento-liga/carga-documento-liga.component';
import { CargaDocumentoClubComponent } from './Usuario/tramites/reconocimiento-personeria/carga-documento-club/carga-documento-club.component';
import { DatosPersonalesComponent } from './Usuario/datos-personales/datos-personales.component';
import { DatosPersonalesFunComponent } from './Funcionario/datos-personales-fun/datos-personales-fun.component';
import { InscripcionGestionComponent } from './Usuario/tramites/inscripcion-dignatarios/inscripcion-gestion/inscripcion-gestion.component';
import { SelectionTipoTramiteIComponent } from './Usuario/tramites/inscripcion-dignatarios/selection-tipo-tramite-i/selection-tipo-tramite-i.component';
import { SelectionTipoTramiteAComponent } from './Usuario/tramites/aprobacion-reformas/selection-tipo-tramite-a/selection-tipo-tramite-a.component';
import { AprobacionGestionComponent } from './Usuario/tramites/aprobacion-reformas/aprobacion-gestion/aprobacion-gestion.component';
import { SelectionTipoTramiteCComponent } from './Usuario/tramites/cancelacion-personeria/selection-tipo-tramite-c/selection-tipo-tramite-c.component';
import { CancelacionGestionComponent } from './Usuario/tramites/cancelacion-personeria/cancelacion-gestion/cancelacion-gestion.component';
import { SelectionTipoTramiteCeComponent } from './Usuario/tramites/certificado-existencia/selection-tipo-tramite-ce/selection-tipo-tramite-ce.component';
import { CertificadoGestionComponent } from './Usuario/tramites/certificado-existencia/certificado-gestion/certificado-gestion.component';
import { CargaDocumentoCertificadoComponent } from './Usuario/tramites/certificado-existencia/carga-documento-certificado/carga-documento-certificado.component';
import { CargaDocumentoCancelacionComponent } from './Usuario/tramites/cancelacion-personeria/carga-documento-cancelacion/carga-documento-cancelacion.component';
import { CargaDocumentoAprobacionComponent } from './Usuario/tramites/aprobacion-reformas/carga-documento-aprobacion/carga-documento-aprobacion.component';
import { CargaDocumentoInscripcionComponent } from './Usuario/tramites/inscripcion-dignatarios/carga-documento-inscripcion/carga-documento-inscripcion.component';
 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    FooterComponent,
    IngresarComponent,
    RegistrarseComponent,
    TramitesComponent,
    ReconocimientoPersonariaComponent,
    FiltroTramitesPipe,
    AddusuarioComponent,
    VistaComponent,
    InscripcionDignatariosComponent,
    CancelacionPersoneriaComponent,
    AprobacionReformasComponent,
    VistainsComponent,
    VistacanComponent,
    VistaaproComponent,
    CertificadoExistenciaComponent,
    VistacertComponent,
    MenusesionComponent,
    MenuadminsesionComponent,
    ModuloFuncionarioComponent,
    ModuloAdminComponent,
    ModuloUsuarioComponent,
    MenuFuncionarioComponent,
    SeletionTipoTramiteComponent,
    FiltroUsuarioFPipe,
    EditElimUsuarioComponent,
    SolicitudesListComponent,
    RecuperarClaveComponent,
    RestablecerClaveComponent,
    GestionSolicitudComponent,
    ConfirmarCuentaComponent,
    Eror404Component,
    ReconocimientoGestioClubComponent,
    ReconocimientoGestioLigaComponent,
    CargaDocumentoLigaComponent,
    CargaDocumentoClubComponent,
    DatosPersonalesComponent,
    DatosPersonalesFunComponent,
    InscripcionGestionComponent,
    SelectionTipoTramiteIComponent,
    SelectionTipoTramiteAComponent,
    AprobacionGestionComponent,
    SelectionTipoTramiteCComponent,
    CancelacionGestionComponent,
    SelectionTipoTramiteCeComponent,
    CertificadoGestionComponent,
    CargaDocumentoCertificadoComponent,
    CargaDocumentoCancelacionComponent,
    CargaDocumentoAprobacionComponent,
    CargaDocumentoInscripcionComponent 
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
    ]),
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
