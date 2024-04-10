import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Login } from '../person/login';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Registration } from '../person/registration';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent{

  data: any;
  rispostaRegistration: String = "";
  rispostaLogin: String = "";

  login: Login = {
    username: "",
    password: "",
  };

  registration: Registration = {
    username: "",
    password: "",
  };

 
  constructor(private loginService: LoginServiceService){ }

  
 newRegistration = () => {
  this.loginService.add(this.registration).subscribe(() =>{
      this.rispostaRegistration = "Registrazione effettuata!";
  })

  this.registration = {
    username: "",
    password: "",
  };
 }

  newLogin = () => {
    this.loginService.ricerca(this.login).subscribe((data) => {
      if(data.valid == true){
        this.rispostaLogin = "Benvenuto nel sito!";
      }else{
        this.rispostaLogin = "Credenziali errate! Riprova di nuovo";
      }
    })

    this.login = {
      username: "",
      password: "",
    };
  }
}
