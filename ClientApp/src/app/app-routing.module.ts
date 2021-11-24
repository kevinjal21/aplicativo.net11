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
import { AuthGuard } from './auth/auth.guard';
import { CargardocumentreconocimientoComponent } from './tramites/reconocimiento-personaria/cargardocumentreconocimiento/cargardocumentreconocimiento.component';
import { ModuloAdminComponent } from './inicio/modulo-admin/modulo-admin.component';
import { ModuloFuncionarioComponent } from './inicio/modulo-funcionario/modulo-funcionario.component';
import { ModuloUsuarioComponent } from './inicio/modulo-usuario/modulo-usuario.component';
import { SeletionTipoTramiteComponent } from './tramites/reconocimiento-personaria/seletion-tipo-tramite/seletion-tipo-tramite.component';
import { EditElimUsuarioComponent } from './Administrador/edit-elim-usuario/edit-elim-usuario.component';
import { SolicitudesListComponent } from './Funcionario/solicitudes-list/solicitudes-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'Ingresar', pathMatch: 'full' },
  { path: 'Inicio', component: InicioComponent },
  { path: 'InicioAdmin', component: ModuloAdminComponent },
  { path: 'InicioFuncionario', component: ModuloFuncionarioComponent },
  { path: 'InicioUsuario', component: ModuloUsuarioComponent, canActivate: [AuthGuard]  },
  { path: 'Registrarse', component: RegistrarseComponent },
  { path: 'Ingresar', component: IngresarComponent },
  { path: 'Tramites', component: TramitesComponent, canActivate: [AuthGuard] },
  { path: 'Addusuario', component: AddusuarioComponent },
  { path:'detalleUsuarioF/:id',component:EditElimUsuarioComponent },
  { path: 'Solicitudes', component: SolicitudesListComponent },


  { path: 'ReconocimientoGestion', component: ReconocimientoPersonariaComponent, canActivate: [AuthGuard] },
  { path: 'ReconocimientoGestion/:id', component: ReconocimientoPersonariaComponent, canActivate: [AuthGuard] },
  { path: 'Reconocimientovista', component: VistaComponent, canActivate: [AuthGuard] },
  { path: 'Reconocimiento/:id', component: SeletionTipoTramiteComponent, canActivate: [AuthGuard] },
  { path: 'CargarDocumentoReconocimiento/:id', component: CargardocumentreconocimientoComponent },

  { path: 'Aprobacionvista', component: VistaaproComponent, canActivate: [AuthGuard] },
  { path: 'Cancelacionvista', component: VistacanComponent, canActivate: [AuthGuard] },
  { path: 'Inscripcionvista', component: VistainsComponent, canActivate: [AuthGuard] },
  { path: 'Certificadovista', component: VistacertComponent, canActivate: [AuthGuard] },
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
