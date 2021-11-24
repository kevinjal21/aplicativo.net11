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
import { TramitesComponent } from './tramites/tramites/tramites.component';
import { ReconocimientoPersonariaComponent } from './tramites/reconocimiento-personaria/reconocimiento-personaria.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { FiltroTramitesPipe } from './pipe/filtro-tramites.pipe';
import { AddusuarioComponent } from './Administrador/addusuario/addusuario.component';
import { VistaComponent } from './tramites/reconocimiento-personaria/vista/vista.component';
import { InscripcionDignatariosComponent } from './tramites/inscripcion-dignatarios/inscripcion-dignatarios.component';
import { CancelacionPersoneriaComponent } from './tramites/cancelacion-personeria/cancelacion-personeria.component';
import { AprobacionReformasComponent } from './tramites/aprobacion-reformas/aprobacion-reformas.component';
import { VistainsComponent } from './tramites/inscripcion-dignatarios/vistains/vistains.component';
import { VistacanComponent } from './tramites/cancelacion-personeria/vistacan/vistacan.component';
import { VistaaproComponent } from './tramites/aprobacion-reformas/vistaapro/vistaapro.component';
import { CertificadoExistenciaComponent } from './tramites/certificado-existencia/certificado-existencia.component';
import { VistacertComponent } from './tramites/certificado-existencia/vistacert/vistacert.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { MenusesionComponent } from './menu/menusesion/menusesion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MenuadminsesionComponent } from './menu/menuadminsesion/menuadminsesion.component';
import { CargardocumentreconocimientoComponent } from './tramites/reconocimiento-personaria/cargardocumentreconocimiento/cargardocumentreconocimiento.component';
import { ModuloFuncionarioComponent } from './inicio/modulo-funcionario/modulo-funcionario.component';
import { ModuloAdminComponent } from './inicio/modulo-admin/modulo-admin.component';
import { ModuloUsuarioComponent } from './inicio/modulo-usuario/modulo-usuario.component';
import { MenuFuncionarioComponent } from './menu/menu-funcionario/menu-funcionario.component';
import { SeletionTipoTramiteComponent } from './tramites/reconocimiento-personaria/seletion-tipo-tramite/seletion-tipo-tramite.component';
import { FiltroUsuarioFPipe } from './pipe/filtro-usuario-f.pipe';
import { EditElimUsuarioComponent } from './Administrador/edit-elim-usuario/edit-elim-usuario.component';
import { SolicitudesListComponent } from './Funcionario/solicitudes-list/solicitudes-list.component';

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
    CargardocumentreconocimientoComponent,
    ModuloFuncionarioComponent,
    ModuloAdminComponent,
    ModuloUsuarioComponent,
    MenuFuncionarioComponent,
    SeletionTipoTramiteComponent,
    FiltroUsuarioFPipe,
    EditElimUsuarioComponent,
    SolicitudesListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    ]),
    AppRoutingModule
  ],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
