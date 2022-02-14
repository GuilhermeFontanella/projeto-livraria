import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Movement } from 'src/app/models/movement.model';
import { environment } from 'src/environments/environment';
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterMovementService {

  url = environment.baseUrl + environment.urlMovement;
  urlBooks = environment.baseUrl + environment.urlModuloBooks;

  constructor(
    private snackBar: MatSnackBar,
    private httpClient: HttpClient
  ) { }

  showMessage(messge: string, duration?: number, hPosition?: string, vPosition?: string) {
    this.snackBar.open(messge, 'fechar', {
      duration: 3000 || duration,
      horizontalPosition: "right" || hPosition,
      verticalPosition: "top" || vPosition
    })
  }

  registerMovement(movement: Movement): Observable<Movement> {
    return this.httpClient.post<Movement>(this.url, movement)
  }

  getMovement(): Observable<Movement> {
    return this.httpClient.get<Movement>(this.url);
  }

  getBooks(idBook?: number): Observable<Book[]> {
    if(idBook) {
      return this.httpClient.get<Book[]>(`${this.urlBooks}/${idBook}`);
    } else {
      return this.httpClient.get<Book[]>(this.urlBooks);
    }
  }

  getRepeatedBooks(bookName?: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.urlBooks}?bookName=${bookName}`)
  }

  deleteBookWithId(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(`${this.urlBooks}/${id}`);
  }
}
