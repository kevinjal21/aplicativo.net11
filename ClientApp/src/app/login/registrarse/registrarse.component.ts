import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';




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
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  // identidicacion = '';
  // tipoId = '';
  // nombres = '';
  // apellidos = '';
  // correo = '';
  // celular = '';
  // rol = '';
  // password = '';

  usuario!: Usuario;
  confirmacionClave!: string;
  checkbox!: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
    this.registerForm = this.formBuilder.group({
      'tipoId': [null, Validators.required],
      'id': [null, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
      'nombres': [null, Validators.required],
      'apellidos': [null, Validators.required],
      'correo': [null, [Validators.email, Validators.required]],
      'celular': [null, [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.minLength(10)]],
      'password': [null, [Validators.required, Validators.pattern(/^[A-Za-z0-9_-]{8,}$/)]],
      'rol':["Usuario"],
      confirmacionClave: [this.confirmacionClave, [Validators.required, Validators.pattern(/^[A-Za-z0-9_-]{1,}$/),], ""],
      checkbox: [this.checkbox, Validators.requiredTrue],
    },
      {
        // Used custom form validator name
        validator: ComparePassword("password", "confirmacionClave")
      }
    );

  }

  get f() { return this.registerForm.controls; }

  onSubmit(form: NgForm) {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.authService.register(form)
      .subscribe(res => {
        this.router.navigate(['Ingresar']);
      }, (err) => {
        console.log(err);
        alert(err.error);
      });
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}

