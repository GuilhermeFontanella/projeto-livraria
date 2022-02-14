import { InventaryService } from './inventary.service';
import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-inventary',
  templateUrl: './inventary.component.html',
  styleUrls: ['./inventary.component.scss']
})
export class InventaryComponent implements OnInit {

  inventary: Book[] = [];

  constructor(
    private inventaryService: InventaryService
  ) { }

  ngOnInit(): void {
    this.returnBooksStored();
  }

  returnBooksStored() {
    this.inventaryService.getBooks().subscribe((resp: any) => {
      this.inventary = resp;
    })
  }
}
