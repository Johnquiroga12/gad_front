import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Criterio } from 'src/app/models/Criterio';
import { Indicador } from 'src/app/models/Indicador';
import { Subcriterio } from 'src/app/models/Subcriterio';
import { IndicadoresService } from 'src/app/services/indicadores.service';
import { SubcriteriosService } from 'src/app/services/subcriterios.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { Modelo } from 'src/app/models/Modelo';
import { AsignacionIndicadorService } from 'src/app/services/asignacion-indicador.service';
import { CriteriosService } from 'src/app/services/criterios.service';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-detalle-subcriterio',
  templateUrl: './detalle-subcriterio.component.html',
  styleUrls: ['./detalle-subcriterio.component.css']
})
export class DetalleSubcriterioComponent {

dataSource:any;
asignacion: any;
  searchText = '';
  constructor(
    private indicadorservice: IndicadoresService,
    private subcriterioservice: SubcriteriosService,
    private router: Router, private fb: FormBuilder,
    private route: ActivatedRoute,
    private sharedDataService: SharedDataService,
    public asignacionIndicadorService:AsignacionIndicadorService,
    public criterioService:CriteriosService,
    public modeloService:ModeloService
    
  ) {
    this.frmSubcriterio = fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.maxLength(250)]]
    })
  }
  criterio: Criterio = new Criterio();
  model:Modelo=new Modelo();
  modelo: Modelo = new Modelo();
  
  subcrite= new Subcriterio();
  
  ngOnInit() {
    const data = history.state.data;
    console.log(data); // aquí tendrías el objeto `subcriterio` de la fila seleccionada.
    this.criterio = data;
    
    let id = localStorage.getItem("id");
   
   
     
      this.recibeSubcriterio();
    
  }

  buscar = '';
  @ViewChild('datosModalRef') datosModalRef: any;
  miModal!: ElementRef;
  
  
  frmSubcriterio: FormGroup;
 
recibeSubcriterio() {
    
    let id = localStorage.getItem("id");
    this.modeloService.getModeloById(Number(id)).subscribe(data => {
      this.model = data;
      this.subcriterioservice.geSubcritebyId(Number(id)).subscribe(result=> {
        this.dataSource = data;
        localStorage.setItem("subcriterios", JSON.stringify(this.dataSource)); // Guardar los subcriterios en localStorage
        // Resto del código...
      
      
      this.asignacionIndicadorService.getAsignacionIndicadorByIdModelo(Number(id)).subscribe(info => {
        this.subcriterioservice.getSubcriterios().subscribe(result => {
          this.dataSource = [];
          this.asignacion = info;
          this.dataSource = result.filter((subcriterio: any) => {
            return info.some((asignacion: any) => {
              return subcriterio.id_subcriterio === asignacion.indicador.subcriterio.id_subcriterio &&  subcriterio.criterio?.id_criterio === this.sharedDataService.obtenerIdCriterio();
              
            });
          });
          console.log(this.dataSource);
        });
      });
    });
    });
  }

  

 
  verIndicadores (subcriterio:Subcriterio) {
   

    
    localStorage.setItem("id", subcriterio.id_subcriterio.toString());
    console.log(subcriterio.id_subcriterio)
    this.subcrite = subcriterio;
  
    this.router.navigate(['/detalle-indicador']);
  }



 
  verCriterios() {
    this.router.navigate(['/detallemodelo']);
  }




  

}


