import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { Observable } from 'rxjs';
import { ArchivoService } from 'src/app/services/archivo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { ActividadService } from 'src/app/services/actividad.service';
@Component({
  selector: 'app-evidencias',
  templateUrl: './evidencias.component.html',
  styleUrls: ['./evidencias.component.css'],
})
export class EvidenciasResponComponent implements OnInit {
  mensaje = '';
  progressInfo = [];
  filename = '';
  fileInfos: Observable<any> | undefined;
  selectedFiles: FileList | undefined;
  Actividades: any[] = [];

  //archivo
  descripcion: string="";
  fecha: Date;
  id_evidencia: number=0;
  filearchivo!: File;
  progreso: number = 0;

  constructor(private archivo: ArchivoService,  private _snackBar: MatSnackBar,    private services: ActividadService) {  this.fecha = new Date();}
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.filearchivo = file;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.filearchivo = event.target.files[0];
    }
  }
  @ViewChild('fileInput') fileInput!: ElementRef;

  ngOnInit(): void {
this.mostra();
}

  mostra(){
    this.fileInfos = this.archivo.listar();

  }

eliminar(filename:string){
  this.archivo.borrar(filename).subscribe(res=>{
    this.openSnackBar('Archivo borrado con éxito', 'Cerrar');
    this.fileInfos=this.archivo.listar();
  })
}
onUpload(): void {
  this.archivo.cargar(this.filearchivo, this.descripcion, this.id_evidencia).subscribe(
    event => {
        console.log('Archivo subido:');
        // Lógica adicional después de subir el archivo
        Swal.fire({
          title: '¡Éxito!',
          text: 'El archivo se ha subido correctamente',
          icon: 'success',
          confirmButtonText: 'OK'
        });
    },
    error => {
      console.error('Error al subir el archivo:', error);
      // Lógica adicional para manejar el error
      Swal.fire({
        title: '¡Error!',
        text: 'Nombre del archivo repetido',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  );
}
 openSnackBar(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
