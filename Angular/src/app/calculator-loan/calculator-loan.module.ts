import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


import { NumericTextBoxModule, SliderModule } from '@syncfusion/ej2-angular-inputs';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AccumulationChartModule, ChartModule } from '@syncfusion/ej2-angular-charts';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { GridModule } from '@syncfusion/ej2-angular-grids';


import { CalculatorLoanComponent } from './calculator-loan.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './home/input/input.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { StatementComponent } from './statement/statement.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { GridAppComponent } from './grid-app/grid-app.component';

import { DataService } from './data-service';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
      path: '',
      component: CalculatorLoanComponent,
  },
  {
      path: '**',
      redirectTo: '',
      pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    CalculatorLoanComponent,
    HomeComponent,
    InputComponent,
    DashboardComponent,
    StatementComponent,
    BarChartComponent,
    GridAppComponent
  ],
  imports: [
    BrowserModule,
    NumericTextBoxModule,
    SliderModule,
    RadioButtonModule,
    AccumulationChartModule,
     DatePickerModule,
    ChartModule,
     GridModule,
     
     RouterModule.forChild(routes),
  ],
  providers: [DataService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // bootstrap: [CalculatorLoanComponent],
  // exports: [CalculatorLoanComponent, BarChartComponent, GridAppComponent, HomeComponent,DashboardComponent,
  //   InputComponent , StatementComponent, RouterModule ]
  exports: [CalculatorLoanComponent, RouterModule]
    
})
export class CalculatorLoanModule { }
