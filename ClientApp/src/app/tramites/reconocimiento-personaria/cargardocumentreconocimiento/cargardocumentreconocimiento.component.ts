import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Documento } from 'src/app/models/documento';
import { DocumentoService } from 'src/app/services/documento.service';


@Component({
  selector: 'app-cargardocumentreconocimiento',
  templateUrl: './cargardocumentreconocimiento.component.html',
  styleUrls: ['./cargardocumentreconocimiento.component.css']
})
export class CargardocumentreconocimientoComponent implements OnInit {

  documento: Documento;
  stask: string;
  constructor
    (
      private route: ActivatedRoute,
      private servicioDocumentos: DocumentoService,
      private location: Location
    ) { }


  name = 'Angular';

  onSubmit() {
    return false;
  }

  ngOnInit() {

    this.get();
  }

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
