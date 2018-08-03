import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from './../api-service.service' 
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: any = [];
  constructor(private apiService: ApiServiceService, private router:Router) { }

  ngOnInit() {
    this.getCars();
  }
  getCars() {
      this.apiService.getCars().subscribe((response:any)=>{
        this.cars = response.data;
      })
  }
  openCar(carId): void{
    console.log(carId);
    // this.router.navigateByUrl('car/'+ carId);
  }
}
