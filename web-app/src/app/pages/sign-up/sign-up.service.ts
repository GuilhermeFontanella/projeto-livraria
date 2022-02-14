import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  url = environment.baseUrl + environment.urlModuloUsuarios

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
    return this.http.post<User>(`${this.url}`, user);
  }
}
