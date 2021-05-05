import { Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor() {}

  datas = [
    {
      titleApp: 'Nombre de la App',
      image: '../../assets/static/login.jpeg',
      titleUser: 'Usuario',
      labelEmail: 'Email:',
      titlePass: 'Contraseña',
      labelPass: 'Password:',
      labelLogin: 'Iniciar Sesión',
      noAccount: '¿Aún no tienes cuenta',
      link:'Regístrate'
    }
  ]
}
