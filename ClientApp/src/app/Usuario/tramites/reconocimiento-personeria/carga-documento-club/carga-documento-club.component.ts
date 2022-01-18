import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Documento } from 'src/app/models/documento';
import { DocumentoService } from 'src/app/services/documento.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ReconocimientoGestioClubComponent } from '../reconocimiento-gestio-club/reconocimiento-gestio-club.component';

@Component({
  providers:[ReconocimientoGestioClubComponent ],
  selector: 'app-carga-documento-club',
  templateUrl: './carga-documento-club.component.html',
  styleUrls: ['./carga-documento-club.component.css']
})
export class CargaDocumentoClubComponent implements OnInit {

  documento: Documento;
  stask: string;
  registerForm!: FormGroup;
  submitted = false;
  file: File;
  file1: File;

  constructor
    (
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private servicioDocumentos: DocumentoService,
      private location: Location,
      private toastr: ToastrService,
      private authService: AuthService,
      private router: Router,
      private componenteRecono: ReconocimientoGestioClubComponent,

    ) { }

  ngOnInit() {
    this.get();
    this.registerForm = this.formBuilder.group({
      'file1': [null, Validators.required],
    }
    );
  }

  update(): void {
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.toastr.error('LLene Todos los Campos!', 'Error!');
      return;
    }
    else if (this.file.size > 2e+6)
    {
      this.toastr.error('El archivo supera los 2MB', 'Error!');
    }

    else 
    {
       this.documento.Archive = this.file;
    this.authService.ActualizarDocumento(this.documento);
    // this.componenteRecono.getAllDocumentos();
    // this.goBack();
    this.regresar();
    }
   
  }
regresar()
  {
    this.router.navigate(['ReconocimientoGestionClub/'+this.route.snapshot.paramMap.get('codt')]).then(
      () =>
      {
        window.location.reload();

      }
    )
  }

  selectFile(e: any) {
    this.file = <File>e.target.files[0];
    console.log(this.file);
  }

  get f() { return this.registerForm.controls; }
  get(): void {
    var id =
      +this.route.snapshot.paramMap.get('id');
    this.servicioDocumentos.get(id.toString())
      .subscribe(doc => this.documento = doc);
  }

  Guardar(): void {
    this.servicioDocumentos.update(this.documento)
      .subscribe(() => this.goBack());
  }

  delete(): void {
    this.servicioDocumentos.delete(this.documento)
      .subscribe(() => this.goBack());
  }

  cancelar() {
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}
