import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {Approutes} from './app-routing.module';

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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoanComponentComponent } from './loan-component/loan-component.component';
import { LoanTypeComponent } from './loan-component/loan-type/loan-type.component';
import { DiscoverComponent } from './home-component/discover/discover.component';
import { KnowYourSectionComponent } from './home-component/know-your-section/know-your-section.component';
import { HowItworksComponent } from './home-component/how-itworks/how-itworks.component';
import { ClientFeedbackComponent } from './home-component/client-feedback/client-feedback.component';
import { CalculatorLoanComponent } from './calculator-loan/calculator-loan.component';


import { NumericTextBoxModule, SliderModule } from '@syncfusion/ej2-angular-inputs';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';

import { AccumulationChartModule, ChartModule } from '@syncfusion/ej2-angular-charts';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { GridModule } from '@syncfusion/ej2-angular-grids';

import { HomeComponent } from './calculator-loan/home/home.component';
import { InputComponent } from './calculator-loan/home/input/input.component';
import { DashboardComponent } from './calculator-loan/home/dashboard/dashboard.component';
import { StatementComponent } from './calculator-loan/statement/statement.component';
import { BarChartComponent } from './calculator-loan/bar-chart/bar-chart.component';
import { GridAppComponent } from './calculator-loan/grid-app/grid-app.component';

import { DataService } from './calculator-loan/data-service'
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
   
 
    LoanTypeComponent,
    LoanComponentComponent,
    DiscoverComponent,
    KnowYourSectionComponent,
    HowItworksComponent,
    ClientFeedbackComponent,
    CalculatorLoanComponent,
  

    HomeComponent,
    InputComponent,
    DashboardComponent,
    StatementComponent,
    BarChartComponent,
    GridAppComponent,
    routingComponents,

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
   
    BrowserModule,
    NumericTextBoxModule,
    SliderModule,
    RadioButtonModule,
    AccumulationChartModule,
    DatePickerModule,
    ChartModule,
    GridModule,
   
    
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpClient, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
