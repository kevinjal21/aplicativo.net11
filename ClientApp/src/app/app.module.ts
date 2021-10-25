import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
