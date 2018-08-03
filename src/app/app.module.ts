import { BrowserModule, TransferState } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { SeoService } from './seo.service';
import { ApiServiceService } from './api-service.service';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CarsComponent } from './cars/cars.component';

@NgModule({
  declarations: [
    AppComponent,
    CarDetailComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'carjasoos-seo-demo' }), 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SeoService,ApiServiceService, TransferState],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(@Inject(PLATFORM_ID) private platformId: Object,
  @Inject(APP_ID) private appId: string){
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  };
}
