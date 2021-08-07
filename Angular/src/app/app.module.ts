import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeIntroComponentComponent } from './home-component/home-intro-component/home-intro-component.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { HeaderComponentComponent } from './home-component/header-component/header-component.component';
import { FooterComponentComponent } from './home-component/footer-component/footer-component.component';
import { ScrollToTopComponent } from './home-component/scroll-to-top/scroll-to-top.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './home-component/card/card.component';
import { TestComponent } from './Forms/test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoanComponentComponent } from './loan-component/loan-component.component';
import { LoanTypeComponent } from './loan-component/loan-type/loan-type.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HomeIntroComponentComponent,
    BreadcrumbComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    ScrollToTopComponent,
    CardComponent,
    TestComponent,
    LoanTypeComponent,
    LoanComponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule ,
    
    
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
