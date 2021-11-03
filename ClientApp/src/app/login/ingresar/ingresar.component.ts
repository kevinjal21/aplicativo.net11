import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  isLoadingResults = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    // this.usuario = new Usuario();
    this.registerForm = this.formBuilder.group({
      'correo': [null, [Validators.email, Validators.required]],
      'password': [null, [Validators.required, Validators.pattern(/^[A-Za-z0-9_-]{8,}$/)]],
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
    this.authService.login(form)
      .subscribe(res => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('nombres', res.nombres);
          localStorage.setItem('apellidos', res.apellidos);
          localStorage.setItem('email', res.email);
          localStorage.setItem('rol', res.rol);
          this.router.navigate(['Tramites']);
        }
      }, (err) => {
        console.log(err);
      });
  }

  onFormSubmit(form: NgForm) {
    this.authService.login(form)
      .subscribe(res => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['Tramites']);
        }
      }, (err) => {
        console.log(err);
      });
  }

  register() {
    this.router.navigate(['Registrarse']);
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}