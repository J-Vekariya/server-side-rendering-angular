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
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IjEiLCJpYXQiOjE1MTUwNzE0Nzh9.xzRyOZLk6XrsXydsogs9kzC38zFir44kllQsBryFw8Y'
      })
    }
      return httpOptions;
  }

  getCars() {
    return this.http.get('http://caradminphase2.demotrt.com/api/admin/cars?index=1&limit=10',this.setHeader());
  }
  getCar(id){
    return this.http.get('http://caradminphase2.demotrt.com/api/car/'+id,this.setHeader());
  }
}
