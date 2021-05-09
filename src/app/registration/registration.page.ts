import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage {

  constructor() { }

  datas = [
    {
      titleApp: 'Registro De Usuario',
      titleUser: 'Nombre del niñ@',
      titleLastName:'Apellidos',
      tittleEdad: 'Edad',
      tittleGene: 'Genero',
      labelEmail: 'Email:',
      titlePass: 'Contraseña',
      labelPass: 'Password:',
      labelNombre: 'Nombre',
      labelLast: 'Apellido',
      nombreNi: 'Nombre del Niñ@',
      edad: 'Elige tu edad',
      genero: 'Genero',
      titleUserParental: 'Correo Electronico Parental',
      labelLogin: 'Crear Cuenta',
      noAccount: '¿Aún no tienes cuenta',
      link:'Regístrate'
    }
  ]
}