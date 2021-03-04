import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface PhpData
{
  status: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})

export class MessageService
{
  constructor(private http : HttpClient) {}

  sendMessage (url : string, data : object) : Observable<PhpData>
  {
    let urlDest = (environment.url + url +".php");
    const formData = new FormData();
    if ( data!=null && data != undefined )
    {
      for (const [key,value] of Object.entries(data) ) { formData.append(key,value); }
    }
    return this.http.post<PhpData> (urlDest,formData,{withCredentials: true});
  }
}