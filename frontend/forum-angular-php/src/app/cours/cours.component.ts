import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from '../message/message.service';


interface DataSource
{
  ID_cours : number;
  dernier_message : string;
  nbr_post : number;
  nbr_sujet : number;
  nom : string;
}

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})


export class CoursComponent implements OnInit
{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ELEMENT_DATA=[];
  dataSource=new MatTableDataSource<DataSource>();
  displayedColumns: string[] = ['nom', 'nbr_sujet', 'nbr_post', 'dernier_message'];
  
  constructor(private servicemsg : MessageService){}


  ngOnInit()
  {
    this.getData();
    console.log(this.ELEMENT_DATA);
  }

  getData()
  {
    const url="getCours";
    const data={};

    this.servicemsg.sendMessage(url,data).subscribe(
      listeCours =>
      {
        if (listeCours.status == 'ok')
        {
          this.ELEMENT_DATA=listeCours.data;
          this.dataSource.data=this.ELEMENT_DATA;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort=this.sort;
          console.log(listeCours.data);
        }
        else {console.log(listeCours.data);}
      }
    )
  }
}