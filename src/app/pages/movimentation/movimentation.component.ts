import { Router } from '@angular/router';
import { InventaryService } from './../inventary/inventary.service';
import { MovimentationService } from './movimentation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimentation',
  templateUrl: './movimentation.component.html',
  styleUrls: ['./movimentation.component.scss']
})
export class MovimentationComponent implements OnInit {

  movimentation: any[] = [];
  inventary: any[] = [];
  showHtml: boolean = false;
  teste: boolean = false;

  constructor(
    private movimentationService: MovimentationService,
    private inventaryService: InventaryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log("iniciou")
    if(localStorage.getItem('user')) {
      this.getMovimentarion();
      this.getInventary(); 
    } else {
      this.router.navigateByUrl('/login');
    }

       
  }

  getMovimentarion() {
    this.movimentationService.getMovimentation().subscribe((resp: any) => {
      this.movimentation = resp;
      this.showHtml = true;     
    })
  }

  getInventary() {
    this.inventaryService.getBooks().subscribe((resp: any) => {
      this.inventary = resp;
    })
  }
}
