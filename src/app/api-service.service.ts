import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  setHeader(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': ''
      })
    }
      return httpOptions;
  }

  getCars() {
    return this.http.get('SERVER_URL',this.setHeader());
  }
  getCar(id){
    return this.http.get('SERVER_URL'+id,this.setHeader());
  }
}
