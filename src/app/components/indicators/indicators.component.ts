import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Romance' ], [ 'Ficção' ], 'História' ],
    datasets: [ {
      data: [ 300, 500, 100 ]
    } ]
  };
  public pieChartType: ChartType = 'pie';

}
