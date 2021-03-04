import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit
{
  user="";
  password="";
  errorMessage="";

  constructor(private servicemsg : MessageService, private router: Router) {}

  ngOnInit(): void {}

  console_display()
  {
    console.log("login est: ");
    console.log(this.user);
    console.log("le mdp est: ");
    console.log(this.password);
  }

  onClick()
  {
    const data = { login:this.user, mdp:this.password };
    const url="checkLogin";

    this.servicemsg.sendMessage(url,data).subscribe(
      message =>
      {

        if (message.status == 'ok')
        {
          this.errorMessage = "";
          console.log(message);
          // this.router.navigateByUrl("/cours");
        }

        else
        {
          this.errorMessage=message.data.reason;
          console.log(message);
        }

      }
    )
  }

}