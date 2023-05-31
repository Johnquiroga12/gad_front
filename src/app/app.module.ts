import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CriteriosService } from './services/criterios.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { CrearUsuariosComponent } from './pages/superadmin/crear-usuarios/crear-usuarios.component';
import { CriteriosComponent } from './pages/superadmin/criterios/criterios.component';
import { EvidenciasComponent } from './pages/superadmin/evidencias/evidencias.component';
import { IndicadorComponent } from './pages/superadmin/indicador/indicador.component';
import { DialogoSubcriterioComponent } from './pages/superadmin/modelo/dialogo-subcriterio/dialogo-subcriterio.component';
import { DetalleModeloComponent } from './pages/superadmin/modelo/detalle-modelo/detalle-modelo.component';
import { CustomDatePipe, InicioModeloComponent } from './pages/superadmin/modelo/inicio-modelo/inicio-modelo.component';
import { SubcriteriosComponent } from './pages/superadmin/subcriterios/subcriterios.component';
import { CriteriosAdminComponent } from './pages/admin/criterios-admin/criterios-admin.component';
import { SubcriteriosAdminComponent } from './pages/admin/subcriterios-admin/subcriterios-admin.component';
import { IncadoresAdminComponent } from './pages/admin/incadores-admin/incadores-admin.component';
import { EvalucionComponent } from './pages/admin/evalucion/evalucion.component';
import { ReportesComponent } from './pages/autoridad/reportes/reportes.component';
import { ConsultaActividadComponent } from './pages/autoridad/consulta-actividad/consulta-actividad.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
//import {fas, faPlus, faPencilAlt, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import { FooterComponent } from './components/footer/footer.component';
import { AsignaComponent } from './pages/admin/asigna/asigna.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
//import { BuscarPipe } from './pages/admin/criterios-admin/buscar.pipe';
import { FormulasComponent } from './pages/superadmin/formulas/formulas.component';
//import { BuscarPipe } from './services/buscar.pipe';
import { SubcriteriosIndicadorComponent } from './pages/superadmin/subcriterios-indicador/subcriterios-indicador.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { BuscarUsuarioPipe } from './pages/superadmin/crear-usuarios/buscar-usuario.pipe';
import { MatSelectModule } from '@angular/material/select';
import { BuscarPipe } from './services/buscar.pipe';
import { CriteriosSubcriterioComponent } from './pages/superadmin/criterios-subcriterio/criterios-subcriterio.component';
import { EvidenciasResponComponent } from './pages/responsable/evidencias/evidencias.component';
import { CommonModule } from '@angular/common';
import { ObcervacionesComponent } from './pages/superadmin/observaciones/obcervaciones.component';

import { AprobarRechazarAdminComponent } from './pages/admin/aprobar-rechazar-admin/aprobar-rechazar-admin.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EvaluacionCuantitativaComponent } from './pages/superadmin/indicadores-evaluacion/evaluacion-cuantitativa/evaluacion-cuantitativa.component';
import { CuantitativaComponent } from './pages/superadmin/cuantitativa/cuantitativa.component';
import { CuanlitativaComponent } from './pages/superadmin/cuanlitativa/cuanlitativa.component';
import { AsignacionEvidenciaComponent } from './pages/admin/asignacion-evidencia/asignacion-evidencia.component';


/* importaciones ce diego */
import { MatDialogModule } from '@angular/material/dialog';
import { MatTreeModule } from '@angular/material/tree';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { ActividadAutoridadComponent } from './pages/autoridad/actividad_autoridad/actividad-autoridad.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { FenixComponent } from './pages/fenix/fenix.component';
import { EvaluacionCualitativaComponent } from './pages/superadmin/indicadores-evaluacion/evaluacion-cualitativa/evaluacion-cualitativa.component';
import { ActividadesResponsableComponent } from './pages/responsable/actividades-responsable/actividades-responsable.component';
import { DetalleSubcriterioComponent } from './pages/superadmin/modelo/detalle-subcriterio/detalle-subcriterio.component';
import { DetalleIndicadorComponent } from './pages/superadmin/modelo/detalle-indicador/detalle-indicador.component';
import { IndicadoresEvidenciaComponent } from './pages/superadmin/indicadores-evidencia/indicadores-evidencia.component';


import { EvidenciaTareasAsginadasComponent } from './pages/responsable/evidencia-tareas-asginadas/evidencia-tareas-asginadas.component';
import { MatListModule } from '@angular/material/list';
import { AprobarRechazarDetalleAdminComponent } from './pages/admin/aprobar-rechazar-detalle-admin/aprobar-rechazar-detalle-admin.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { MatrizEvaluacionComponent } from './pages/superadmin/modelo/matriz-evaluacion/matriz-evaluacion.component';
import { CalificacionComponent } from './pages/superadmin/modelo/matriz-evaluacion/calificacion/calificacion.component';
import { MatRadioModule } from '@angular/material/radio';

import { NgChartsModule } from 'ng2-charts';
import { GraficosComponent } from './pages/autoridad/graficos/graficos.component';
import { DashboardComponent2 } from './pages/superadmin/dashboard/dashboard.component';

import { MatrizEvidenciasComponent } from './pages/superadmin/modelo/matriz-evaluacion/matriz-evidencias/matriz-evidencias.component';

import { CriterioReporteComponent } from './pages/superadmin/criterio-reporte/criterio-reporte.component';
import { PonderacionComponent } from './pages/superadmin/ponderacion/ponderacion/ponderacion.component';
import { PonderacionIndicadorComponent } from './pages/superadmin/ponderacion/ponderacion-indicador/ponderacion-indicador.component';
import { PonderacionCriterioComponent } from './pages/superadmin/ponderacion/ponderacion-criterio/ponderacion-criterio.component';
import { PonderacionModeloComponent } from './pages/superadmin/ponderacion/ponderacion-modelo/ponderacion-modelo.component';
import { PonderacionfinalComponent } from './pages/superadmin/ponderacion/ponderacionfinal/ponderacionfinal.component';

import { ActividadCriterioModelo } from './pages/responsable/actividad-criterio-modelo/actividad-criterio-modelo.component';
import { ActividadCriterioDetalle } from './pages/responsable/actividad-criterio-detalle/actividad-criterio-detalle.component';
import { ActividadCriterioSubcriterio } from './pages/responsable/atividad-criterio-subcriterio/atividad-criterio-subcriterio.component';
import { ActiviadDetalleIndicadorComponent } from './pages/responsable/actividad-detalle-indicador/actividad-detalle-indicador.component';
import { EvidenciaAtrasadaComponent } from './pages/superadmin/evidencia-atrasada/evidencia-atrasada.component';
import { AsignarCriterioComponent } from './pages/superadmin/modelo/detalle-modelo/asignar-criterio/asignar-criterio.component';
import { DialogoCriterioComponent } from './pages/superadmin/modelo/dialogo-criterio/dialogo-criterio.component';
import { DialogoModeloComponent } from './pages/superadmin/modelo/dialogo-modelo/dialogo-modelo.component';
import { FechasModeloComponent } from './pages/superadmin/modelo/detalle-modelo/fechas-modelo/fechas-modelo.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    EvidenciasResponComponent,
    DashboardComponent,
    DashboardComponent2,
    UserDashboardComponent,
    CrearUsuariosComponent,
    CriteriosComponent,
    SubcriteriosComponent,
    IndicadorComponent,
    IndicadoresEvidenciaComponent,
    EvidenciasComponent,
    CriteriosAdminComponent,
    SubcriteriosAdminComponent,
    IncadoresAdminComponent,
    EvalucionComponent,
    ReportesComponent,
    ConsultaActividadComponent,
    SiderbarComponent,
    FooterComponent,
    AsignaComponent,
    PageNotFoundComponent,
    BuscarPipe,
    FormulasComponent,
    CriteriosSubcriterioComponent,
    SubcriteriosIndicadorComponent,
    ObcervacionesComponent,
    UserProfileComponent,
    ActividadesResponsableComponent,
    BuscarUsuarioPipe,
    CuantitativaComponent,
    CuanlitativaComponent,
    AsignacionEvidenciaComponent,
    BuscarUsuarioPipe,
    SubcriteriosComponent,
    BuscarUsuarioPipe,
    AprobarRechazarAdminComponent,
    ActividadAutoridadComponent,
    EvaluacionCuantitativaComponent,
    InicioModeloComponent,
    DialogoCriterioComponent,
    DialogoSubcriterioComponent,
    DetalleModeloComponent,
    DetalleModeloComponent,
    DialogoModeloComponent,
    FenixComponent,
    ActividadesResponsableComponent,
    IndicadoresEvidenciaComponent,
    GraficosComponent,
    EvaluacionCualitativaComponent,
    DetalleSubcriterioComponent,
    DetalleIndicadorComponent,
    ActividadesResponsableComponent,
    IndicadoresEvidenciaComponent,
    MatrizEvaluacionComponent,
    CalificacionComponent,
    EvidenciaTareasAsginadasComponent,
    AprobarRechazarDetalleAdminComponent,

    MatrizEvidenciasComponent,

    CriterioReporteComponent,
    PonderacionComponent,
    PonderacionIndicadorComponent,
    PonderacionCriterioComponent,
    PonderacionModeloComponent,
    PonderacionfinalComponent,
    ActividadCriterioModelo,
    ActividadCriterioDetalle,
    ActividadCriterioSubcriterio,
    ActiviadDetalleIndicadorComponent,
    EvidenciaAtrasadaComponent,
    AsignarCriterioComponent,

    CustomDatePipe,
      FechasModeloComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    FontAwesomeModule,
    CommonModule,
    MatSelectModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTreeModule,
    MatStepperModule,
    MatMomentDateModule,
    MomentDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatListModule,
    NgChartsModule

  ],

  providers: [authInterceptorProviders, CriteriosService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) { }
}
