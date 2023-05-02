import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Criterio } from 'src/app/models/Criterio';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CriteriosService } from 'src/app/services/criterios.service';
@Component({
  selector: 'app-criterios',
  templateUrl: './criterios.component.html',
  styleUrls: ['./criterios.component.css']
})
export class CriteriosComponent implements OnInit {
  searchText = '';
  @ViewChild('datosModalRef') datosModalRef: any;
  miModal!: ElementRef;
  public crite = new Criterio();
  criterios: any[] = [];
  frmCriterio: FormGroup;
  guardadoExitoso: boolean = false;
  constructor(private criterioservice: CriteriosService,
    private router: Router, private fb: FormBuilder
  ) {
    this.frmCriterio = fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.maxLength(250)]]
    })
  }
  ngOnInit(): void {
    this.listar();
  }
  guardar() {
    this.crite = this.frmCriterio.value;
    this.criterioservice.crear(this.crite)
      .subscribe(
        (response) => {
          console.log('Criterio creado con éxito:', response);
          this.guardadoExitoso = true;
          this.listar();
        },
        (error) => {
          console.error('Error al crear el criterio:', error);
        }
      );

  }
  eliminar(criterio: any) {
    this.criterioservice.eliminar(criterio).subscribe(
      (response) => {
        this.listar()
      }
    );
  }

  listar(): void {
    this.criterioservice.getCriterios().subscribe(
      (data: any[]) => {
        this.criterios = data;
      },
      (error: any) => {
        console.error('Error al listar los criterios:', error);
      }
    );
  }

  editDatos(criterio: Criterio) {
    // this.crite.id_criterio = criterio.id_criterio
    // this.crite.nombre = criterio.nombre
    // this.crite.descripcion = criterio.descripcion
    this.crite = criterio;
    this.frmCriterio = new FormGroup({
      nombre: new FormControl(criterio.nombre),
      descripcion: new FormControl(criterio.descripcion)

    });
  }

  crear(): void {
    // this.criterioservice.crear(this.crite)
    //     .subscribe(
    //         (response) => {
    //             console.log('Criterio creado con éxito:', response);
    //         },
    //         (error) => {
    //             console.error('Error al crear el criterio:', error);
    //         }
    //     );
  }
  limpiarFormulario() {
    this.frmCriterio.reset();
    this.crite = new Criterio;
  }

  actualizar() {
    this.crite.nombre = this.frmCriterio.value.nombre;
    this.crite.descripcion = this.frmCriterio.value.descripcion;
    this.criterioservice.actualizar(this.crite.id_criterio, this.crite)
      .subscribe(response => {
        this.crite = new Criterio();
        this.listar();
      });
  }

  verDetalles(criterio: any) {
    this.router.navigate(['/criterios-subcriterio'], { state: { data: criterio } });
  }
}
