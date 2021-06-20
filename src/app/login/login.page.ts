import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({ 
      email: ['', Validators.compose([ 
        Validators.required, 
        Validators.email 
      ])] 
    });
  }

  datas = [
    {
      imgApp: '../../assets/static/logo.png',
      titleUser: 'Usuario',
      labelEmail: 'Email:',
      titlePass: 'Contraseña',
      labelPass: 'Password:',
      labelLogin: 'Iniciar Sesión',
      noAccount: '¿Aún no tienes cuenta?',
      link:'Regístrate'
    }
  ]
}
