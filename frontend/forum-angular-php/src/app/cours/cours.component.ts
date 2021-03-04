import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message/message.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit
{
  constructor(private servicemsg : MessageService) { }

  ngOnInit(): void
  {
    const url="getCours";
    const data={};
    let listeCours=[];

    this.servicemsg.sendMessage(url,data).subscribe(
      message =>
      {
        if (message.status == 'ok')
        {
          console.log(message);
        }

        else
        {
          console.log(message);
        }
      }
    )
  }

}
