
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperadminRoutingModule } from './superadmin-routing.module';

import { DashboardComponent2 } from './pages/dashboard/dashboard.component';
import { CrearUsuariosComponent } from './pages/crear-usuarios/crear-usuarios.component';
import { CriteriosComponent } from './pages/criterios/criterios.component';
import { SubcriteriosComponent } from './pages/subcriterios/subcriterios.component';
import { IndicadorComponent } from './pages/indicador/indicador.component';
import { IndicadoresEvidenciaComponent } from './pages/indicadores-evidencia/indicadores-evidencia.component';
import { EvidenciasComponent } from './pages/evidencias/evidencias.component';
import { FormulasComponent } from './pages/formulas/formulas.component';
import { CriteriosSubcriterioComponent } from './pages/criterios-subcriterio/criterios-subcriterio.component';
import { SubcriteriosIndicadorComponent } from './pages/subcriterios-indicador/subcriterios-indicador.component';
import { ObcervacionesComponent } from './pages/observaciones/obcervaciones.component';
import { CuantitativaComponent } from './pages/cuantitativa/cuantitativa.component';
import { CuanlitativaComponent } from './pages/cuanlitativa/cuanlitativa.component';
import { CriterioReporteComponent } from './pages/criterio-reporte/criterio-reporte.component';
import { EvidenciaAtrasadaComponent } from './pages/evidencia-atrasada/evidencia-atrasada.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { EvaluacionCuantitativaComponent } from './pages/evaluacion-cuantitativa/evaluacion-cuantitativa.component';

@NgModule({
  declarations: [
    DashboardComponent2,
    CrearUsuariosComponent,
    CriteriosComponent,
    SubcriteriosComponent,
    IndicadorComponent,
    IndicadoresEvidenciaComponent,
    EvidenciasComponent,
    FormulasComponent,
    CriteriosSubcriterioComponent,
    SubcriteriosIndicadorComponent,
    ObcervacionesComponent,
    CuantitativaComponent,
    CuanlitativaComponent,
    SubcriteriosComponent,
    CriterioReporteComponent,
    EvidenciaAtrasadaComponent,
    EvaluacionCuantitativaComponent,

  ],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    
    SharedModule,
  ]
})
export class SuperadminModule { }
