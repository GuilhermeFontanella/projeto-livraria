
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() data: any[] = []; 

  public barChartOptions: ChartConfiguration['options']= {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      }
    }
  };

  barChartType: ChartType = 'bar';

  barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  ngOnInit(): void {
      this.barChartData = {
        labels: [ 'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ' ],
        datasets: [
          { data: [], label: 'Locações' },
        ]
      }; 

      let contadorJan = 0;
      let contadorFev = 0;
      let contadorMar = 0;
      let contadorAbr = 0;
      let contadorMai = 0;
      let contadorJun = 0;
      let contadorJul = 0;
      let contadorAgo = 0;
      let contadorSet = 0;
      let contadorOut = 0;
      let contadorNov = 0;
      let contadorDez = 0;

      for (let item of this.data) {
        if(item.date.includes('/01/')) {
          contadorJan++;
          this.barChartData.datasets[0].data[0] = contadorJan;
        }
        if(item.date.includes('/02/')) {
          contadorFev++;
          this.barChartData.datasets[0].data[1] = contadorFev;
        }
        if(item.date.includes('/03/')) {
          contadorMar++;
          this.barChartData.datasets[0].data[2] = contadorMar;
        }
        if(item.date.includes('/04/')) {
          contadorAbr++;
          this.barChartData.datasets[0].data[3] = contadorAbr;
        }
        if(item.date.includes('/05/')) {
          contadorMai++;
          this.barChartData.datasets[0].data[4] = contadorMai;
        }
        if(item.date.includes('/06/')) {
          contadorJun++;
          this.barChartData.datasets[0].data[5] = contadorJun;
        }
        if(item.date.includes('/07/')) {
          contadorJul++;
          this.barChartData.datasets[0].data[6] = contadorJul;
        }
        if(item.date.includes('/08/')) {
          contadorAgo++;
          this.barChartData.datasets[0].data[7] = contadorAgo;
        }
        if(item.date.includes('/09/')) {
          contadorSet++;
          this.barChartData.datasets[0].data[8] = contadorSet;
        }
        if(item.date.includes('/10/')) {
          contadorOut++;
          this.barChartData.datasets[0].data[9] = contadorOut;
        }
        if(item.date.includes('/11/')) {
          contadorNov++;
          this.barChartData.datasets[0].data[10] = contadorNov;
        }
        if(item.date.includes('/12/')) {
          contadorDez++;
          this.barChartData.datasets[0].data[11] = contadorDez;
        }
      }
  }
}
