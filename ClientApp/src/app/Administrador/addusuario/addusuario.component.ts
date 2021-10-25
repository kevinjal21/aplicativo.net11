import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { ValidatorFn, AbstractControl } from '@angular/forms';
//  import { ToastrService } from 'ngx-toastr';



// To validate password and confirm password
export function ComparePassword(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

@Component({
  selector: 'app-addusuario',
  templateUrl: './addusuario.component.html',
  styleUrls: ['./addusuario.component.css']
})

export class AddusuarioComponent implements OnInit {


  listaUsuarios: any[] = [{
    tipoId: 'cc', id: '1010039344', nombres: 'Mike', apellidos: 'Benjumea', correo: 'maicoolbenjumea11@gmail.com', celular: '3003148827', clave: '117mike1127'
  }];

  registerForm!: FormGroup;
  submitted = false;

  usuario!: Usuario;
  TipoDato!: string;
  confirmacionClave!: string;
  checkbox!: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.TipoDato = 'password';
    this.usuario = new Usuario();
    this.registerForm = this.formBuilder.group({
      tipoId: [this.usuario.tipoId, Validators.required],
      id: [this.usuario.id, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      nombres: [this.usuario.nombres, Validators.required],
      apellidos: [this.usuario.apellidos, Validators.required],
      correo: [this.usuario.correo, [Validators.email, Validators.required]],
      celular: [this.usuario.celular, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.minLength(10)]],
      clave: [this.usuario.clave, [Validators.required, Validators.pattern(/^[A-Za-z0-9_-]{8,}$/)]],
      confirmacionClave: [this.confirmacionClave, [Validators.required, Validators.pattern(/^[A-Za-z0-9_-]{1,}$/),], ""],
      checkbox: [this.checkbox, Validators.requiredTrue],
    },
      {
        // Used custom form validator name
        validator: ComparePassword("clave", "confirmacionClave")
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
    this.add();
  }

  add() {
    this.usuario.tipoId = this.registerForm.get('tipoId').value;
    this.usuario.id = this.registerForm.get('id').value;
    this.usuario.nombres = this.registerForm.get('nombres').value;
    this.usuario.apellidos = this.registerForm.get('apellidos').value;
    this.usuario.correo = this.registerForm.get('correo').value;
    this.usuario.celular = this.registerForm.get('celular').value;
    this.usuario.clave = this.registerForm.get('clave').value;
    this.listaUsuarios.push(this.usuario);
    console.log(this.usuario);
    // this.toastr.success('el usuario se registro con exito', 'Registro de usuario');
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}

