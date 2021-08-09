

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridAppComponent } from './grid-app/grid-app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DataService } from './data-service';

@Component({
  selector: 'app-calculator-loan',
  templateUrl: './calculator-loan.component.html',
  styleUrls: ['./calculator-loan.component.scss']
})
export class CalculatorLoanComponent implements OnInit {

   /** Configurations for the Home page */
   constructor(private data: DataService) {
  }

  @ViewChild('chartSection')
  public chart: BarChartComponent;
  @ViewChild('gridSection')
  public grid: GridAppComponent;

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.data.grid = this.grid;
    this.data.chart = this.chart;
  }
}
