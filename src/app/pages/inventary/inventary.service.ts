import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventaryService {
  url = environment.baseUrl + environment.urlModuloBooks;

  constructor(
    private httpClient: HttpClient
  ) { }

  getBooks(params?: string | null): Observable<Book[]> {
    if(params) {
      return this.httpClient.get<Book[]>(`${this.url}${params}`);
    } else {
      return this.httpClient.get<Book[]>(`${this.url}`);

    }
  }

  getBooksWithId(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.url}/${id}`)
  }
}
