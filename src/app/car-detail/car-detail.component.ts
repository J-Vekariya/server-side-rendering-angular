import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { ActivatedRoute } from '@angular/router';
import { TransferState, makeStateKey, Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { tap, startWith } from 'rxjs/operators';
import { ApiServiceService } from '../api-service.service';

const CAR_KEY = makeStateKey<any>('car');
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car: any = {};
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiServiceService,
    private state: TransferState,
    private seo: SeoService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getCar(id);
  }

  getCar(id) {
    const exists = this.state.get(CAR_KEY, {} as any);
    return this.apiService.getCar(id).subscribe((response: any) => {
      this.car = response.data;
      this.state.set(CAR_KEY, this.car)
      this.seo.generateTags({
        title: this.car.name,
        description: this.car.description,
        image: this.car.car_brand.image_url
      });
      console.log(response.data);
      startWith(exists)

    })
  }
}
