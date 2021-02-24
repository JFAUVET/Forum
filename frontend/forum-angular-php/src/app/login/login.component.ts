import { Component, OnInit } from '@angular/core';
import { callbackify } from 'util';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit
{
  user="";
  mdp="";
  errorMessage="Erreur";

  constructor(private servicemsg : MessageService) {}

  ngOnInit(): void {}

  console_display()
  {
    console.log("login est: ");
    console.log(this.user);
    console.log("le mdp est: ");
    console.log(this.mdp);
  }

  testMessage()
  {
    let data = { login: 'mon_login', password: 'mon_password' };
    console.log(this.servicemsg.sendMessage("test",data));
  }

  // testLogin()
  // {
  //   if (this.errorMessage.length!=0)
  // }
}