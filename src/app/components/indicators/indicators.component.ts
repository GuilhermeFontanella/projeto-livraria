import { RegisterNewBookService } from './../../pages/register-new-book/register-new-book.service';
import { MovimentationService } from './../../pages/movimentation/movimentation.service';
import { InventaryService } from './../../pages/inventary/inventary.service';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.scss']
})
export class IndicatorsComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        
        position: 'left',
      },
    },
  };

  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [ {
      data: []
    } ]
  };

  pieChartType: ChartType = 'pie';

  data: any[] = [];
  genders: any[] = [];
  booksId: any[] = [];
  movementBooksGender: any[] = [];

  constructor(
    private movimentationService: MovimentationService,
    private inventaryService: InventaryService,
    private registerNewBookService: RegisterNewBookService
  ) { }

  ngOnInit(): void {
    this.getInventaryData();
    this.populateGenders(); 
    
    let el = document.getElementById('chart');
    el?.classList.add('resize');
    setTimeout(() => {
      el?.classList.remove('resize');
    }, 200);
    
    console.log(el)
  }

  getInventaryData() {
    this.movimentationService.getMovimentation().subscribe((resp: any) => {
      this.data = resp;  

      this.data.map((element) => { 
        this.booksId.push(element.idBook);
      })

      for (let item of this.booksId) {
        this.getGenderWithBookId(item);        
      }
    })
  }

  getGenderWithBookId(idBook: number) {
    this.inventaryService.getBooksWithId(idBook).subscribe((resp: any) => {
        
        this.movementBooksGender.push(resp.gender);
        
        let genderAcao = 0;
        let genderFiccao = 0;
        let genderFantasia = 0;
        let genderHistoria = 0;
        let genderRomance = 0;
        let genderAutoAjuda = 0;
        let genderCulinario = 0;

        for (let item of this.movementBooksGender) {
          if(item === 'Ação') {
            genderAcao++
            this.pieChartData.datasets[0].data[0] = genderAcao;
          };
          if(item === 'Ficção') {
            genderFiccao++;
            this.pieChartData.datasets[0].data[1] = genderFiccao;
          };
          if(item === 'Fantasia') {
            genderFantasia++;
            this.pieChartData.datasets[0].data[2] = genderFantasia;
          };
          if(item === 'História') {
            genderHistoria++;
            this.pieChartData.datasets[0].data[3] = genderHistoria;
          };
          if(item === 'Romance') {
            genderRomance++;
            this.pieChartData.datasets[0].data[4] = genderRomance; 
          };
          if(item === 'Auto ajuda') {
            genderAutoAjuda++;
            this.pieChartData.datasets[0].data[5] = genderAutoAjuda;
          };
          if(item === 'Culinário') {
            genderCulinario++;
            this.pieChartData.datasets[0].data[6] = genderCulinario; 
          };
        }
      }) 
  }

  populateGenders() {

    this.registerNewBookService.getGender().subscribe((resp: any) => {
      this.genders = resp;

      this.genders.forEach((element => {
        this.pieChartData.labels?.push(element.label);
      }))
    })
  }
}
