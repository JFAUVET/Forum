import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message/message.service';

interface DataSource
{
  ID_sujet : number;
  nom : string;
  ID_cours : number;
  nbr_post : number;
  dernier_message : string;
}

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ELEMENT_DATA=[];
  dataSource=new MatTableDataSource<DataSource>();
  displayedColumns: string[] = ['nom', 'nbr_post', 'dernier_message'];

  constructor(private activated_route : ActivatedRoute, private servicemsg : MessageService){}

  ngOnInit(): void
  {
    let id_cours=this.activated_route.snapshot.params.id;
    console.log(id_cours);
    this.getData(id_cours);
    console.log(this.ELEMENT_DATA);
  }

  getData(id_cours)
  {
    const url="getTopics";
    const data={id_cours:id_cours};

    this.servicemsg.sendMessage(url,data).subscribe(
      listeTopics =>
      {
        if (listeTopics.status == 'ok')
        {
          this.ELEMENT_DATA=listeTopics.data;
          this.dataSource.data=this.ELEMENT_DATA;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort=this.sort;
          console.log(listeTopics.data);
        }
        else
        {
          console.log("Error.")
          console.log(listeTopics.data);
        }
      }
    )
  }
}