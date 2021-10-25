import { Component, OnInit } from '@angular/core';
import { Documento } from '../../models/documento';

@Component({
  selector: 'app-reconocimiento-personaria',
  templateUrl: './reconocimiento-personaria.component.html',
  styleUrls: ['./reconocimiento-personaria.component.css']
})
export class ReconocimientoPersonariaComponent implements OnInit {

  constructor() { }
  anteproyecto = new Documento;
  ngOnInit() {
  }

  onFileChange(event) {
    // this.anteproyecto.Archive = <File>event.target.files[0];

  }

}
