import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-funcionario-gobierno',
  templateUrl: './menu-funcionario-gobierno.component.html',
  styleUrls: ['./menu-funcionario-gobierno.component.css']
})
export class MenuFuncionarioGobiernoComponent implements OnInit {

  constructor(private router: Router, private servicios: AuthService) { }

  nom: string;
  apelli: string;
  rol: string;
  correo: string;
  espacio: string;


  ngOnInit() {
    this.getAll();
    this.espacio=" ";
  }

  onLogout() {
    localStorage.removeItem('nombres');
    localStorage.removeItem('token');
    localStorage.removeItem('apellidos');
    localStorage.removeItem('email');
    localStorage.removeItem('rol');
    localStorage.removeItem('codigosolicitud');
    localStorage.removeItem('codigoU');
    this.router.navigate(['Ingresar']);
  }

  getAll() {
    this.nom=this.servicios.getNombreLocalStore();
    this.apelli=this.servicios.getApellidoLocalStore();
    this.rol=this.servicios.getRolLocalStore();
    this.correo=this.servicios.getCorreoLocalStore();
  }
}
