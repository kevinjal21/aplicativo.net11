import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  listaUsuarios: any[] = [{
    tipoId: 'cc', id: '1010039344', nombres: 'Mike', apellidos: 'Benjumea', correo: 'maicoolbenjumea11@gmail.com', celular: '3003148827', clave: '117mike1127'
  }];

  registerForm!: FormGroup;
  submitted = false;

  usuario!: Usuario;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.registerForm = this.formBuilder.group({
      correo: [this.usuario.correo, [Validators.email, Validators.required]],
      clave: [this.usuario.clave, [Validators.required, Validators.pattern(/^[A-Za-z0-9_-]{8,}$/)]],
    }
    );

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.ingresar();
  }

  ingresar() {
    // for (let index = 0; index < this.listaUsuarios.length; index++) {
    //   const element = this.listaUsuarios[index];
    //   if (element.correo == this.registerForm.get('correo')?.value && element.clave == this.registerForm.get('clave')?.value) {
    //     console.log('el usuario existe');
    //     index=this.listaUsuarios.length;
    //   }
    // }

    // // .subscribe( usuario =>{
    // //     alert("se agrego un ausurio")
    // //   });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}