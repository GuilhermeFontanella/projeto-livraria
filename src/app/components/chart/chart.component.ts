
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

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
    // We use these empty structures as placeholders for dynamic theming.
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
      let contador = 0;
      for (let item of this.data) {
        if(item.date.includes('/01/')) {
          contador++;
          this.barChartData.datasets[0].data[0] = contador;
        }
        // if(item.date.includes('/02/')) {
        //   contador++
        //   this.barChartData.datasets[0].data[1] = contador;
        // }
        // if(item.date.includes('/03/')) {
        //   contador++
        //   this.barChartData.datasets[0].data[2] = contador;
        // }
        // if(item.date.includes('/04/')) {
        //   contador++
        //   this.barChartData.datasets[0].data[3] = contador;
        // }
        // if(item.date.includes('/05/')) {
        //   this.barChartData.datasets[0].data[4] = this.data.length;
        // }
        // if(item.date.includes('/06/')) {
        //   this.barChartData.datasets[0].data[5] = this.data.length;
        // }
        // if(item.date.includes('/07/')) {
        //   this.barChartData.datasets[0].data[6] = this.data.length;
        // }
        // if(item.date.includes('/08/')) {
        //   this.barChartData.datasets[0].data[7] = this.data.length;
        // }
        // if(item.date.includes('/09/')) {
        //   this.barChartData.datasets[0].data[8] = this.data.length;
        // }
        // if(item.date.includes('/10/')) {
        //   this.barChartData.datasets[0].data[9] = this.data.length;
        // }
        // if(item.date.includes('/11/')) {
        //   this.barChartData.datasets[0].data[10] = this.data.length;
        // }
        // if(item.date.includes('/12/')) {
        //   this.barChartData.datasets[0].data[11] = this.data.length;
        // }
      }

  }

}
