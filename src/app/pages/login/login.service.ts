import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = environment.baseUrl + environment.urlModuloUsuarios;
  
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

  getUser(user: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.url}?user=${user}&password=${password}`);
  }
}
