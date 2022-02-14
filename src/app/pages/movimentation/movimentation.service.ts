import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movement } from 'src/app/models/movement.model';

@Injectable({
  providedIn: 'root'
})
export class MovimentationService {
  url = environment.baseUrl + environment.urlMovement;

  constructor(
    private httpClient: HttpClient
  ) { }

  getMovimentation(): Observable<Movement[]> {
    return this.httpClient.get<Movement[]>(this.url)
  }
}
