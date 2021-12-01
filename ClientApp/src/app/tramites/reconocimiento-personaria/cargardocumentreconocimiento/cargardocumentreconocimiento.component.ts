import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Documento } from 'src/app/models/documento';
import { DocumentoService } from 'src/app/services/documento.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-cargardocumentreconocimiento',
  templateUrl: './cargardocumentreconocimiento.component.html',
  styleUrls: ['./cargardocumentreconocimiento.component.css']
})
export class CargardocumentreconocimientoComponent implements OnInit {

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

    ) { }

  ngOnInit() {
    this.get();
    // this.registerForm = this.formBuilder.group({
    //   'filenew': [null, Validators.required],
    // }
    // );
  }

  name = 'Angular';

  // onSubmit(form: NgForm) {
  //   this.submitted = true;
  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //     this.toastr.error('LLene Todos los Campos!', 'Error!');
  //     return;
  //   }
  //   this.servicioDocumentos.cargarDocumento(this.filenew, Number(this.route.snapshot.paramMap.get('id')))
  //     .subscribe(res => {
  //       this.toastr.success('Se Cargó el documento', 'Registro Exitoso!');
  //       this.goBack();
  //     }, (err) => {
  //       console.log(err);
  //       alert(err.error);
  //     });
  // }


  update(): void {
    // this.file = this.file.target.files[0];

    console.log(this.file);
    this.documento.Archive=this.file;
    this.authService.registerArchivo(this.documento)
      .subscribe(d => console.log(d)

      );
    this.servicioDocumentos.cargarDocumentoUpdate
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
