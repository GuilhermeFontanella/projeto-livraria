import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterNewBookService {
  url = environment.baseUrl + environment.urlModuloBooks;
  urlGender = environment.baseUrl + environment.urlGender;

  constructor(
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage(messge: string, duration?: number, hPosition?: string, vPosition?: string) {
    this.snackBar.open(messge, 'fechar', {
      duration: 3000 || duration,
      horizontalPosition: "right" || hPosition,
      verticalPosition: "top" || vPosition
    })
  }

  getBooks(books: Book): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.url);
  }

  registerNewBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.url, book);
  }

  getGender(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.urlGender);
  }
}
