import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  baseUrl = "http://localhost:3000/usuarios";

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage(messge: string, duration?: number, hPosition?: string, vPosition?: string) {
    this.snackBar.open(messge, 'fechar', {
      duration: 3000 || duration,
      horizontalPosition: "right" || hPosition,
      verticalPosition: "top" || vPosition
    })
  }

  signUp(user: User):  Observable<User> {
    return this.http.post<User>(this.baseUrl, user);
  }
}
