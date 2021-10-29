import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarseComponent } from './login/registrarse/registrarse.component';
import { IngresarComponent } from './login/ingresar/ingresar.component';
import { TramitesComponent } from './tramites/tramites/tramites.component';
import { ReconocimientoPersonariaComponent } from './tramites/reconocimiento-personaria/reconocimiento-personaria.component';
import { AddusuarioComponent } from './Administrador/addusuario/addusuario.component';
import { VistaComponent } from './tramites/reconocimiento-personaria/vista/vista.component';
import { VistaaproComponent } from './tramites/aprobacion-reformas/vistaapro/vistaapro.component';
import { VistacanComponent } from './tramites/cancelacion-personeria/vistacan/vistacan.component';
import { VistainsComponent } from './tramites/inscripcion-dignatarios/vistains/vistains.component';
import { VistacertComponent } from './tramites/certificado-existencia/vistacert/vistacert.component';
import { InscripcionDignatariosComponent } from './tramites/inscripcion-dignatarios/inscripcion-dignatarios.component';
import { AprobacionReformasComponent } from './tramites/aprobacion-reformas/aprobacion-reformas.component';
import { CancelacionPersoneriaComponent } from './tramites/cancelacion-personeria/cancelacion-personeria.component';
import { CertificadoExistenciaComponent } from './tramites/certificado-existencia/certificado-existencia.component';

const routes: Routes = [
  { path: '', component: TramitesComponent },
  { path: 'Inicio', component: InicioComponent,data: { title: 'Inicio' } },
  { path: 'Registrarse', component: RegistrarseComponent },
  { path: 'Ingresar', component: IngresarComponent },
  { path: 'Tramites', component: TramitesComponent },
  { path: 'Addusuario', component: AddusuarioComponent },
  { path: 'Reconocimientovista', component: VistaComponent },
  { path: 'Aprobacionvista', component: VistaaproComponent },
  { path: 'Cancelacionvista', component: VistacanComponent },
  { path: 'Inscripcionvista', component: VistainsComponent },
  { path: 'Certificadovista', component: VistacertComponent },
  { path: 'Reconocimiento', component: ReconocimientoPersonariaComponent },
  { path: 'Inscripcion', component: InscripcionDignatariosComponent },
  { path: 'Aprobacion', component: AprobacionReformasComponent },
  { path: 'Cancelacion', component: CancelacionPersoneriaComponent },
  { path: 'Certificado', component: CertificadoExistenciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
