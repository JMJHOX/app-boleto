import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'
import { Observable,throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import {BoletoUser} from '../shared/models/boleto.model';
const API_URL_DEV: string = 'https://server-utp.herokuapp.com/api/';
const API_URL_PRO: string = 'http://127.0.0.1:8000/api/';
@Injectable({
  providedIn: 'root'
})
export class BoletosService {
//initiate the new Loading variable via BehaviorSubject and set it to "true" from the beginning.

  constructor(private http: HttpClient) {
   //set the loading$ to true again just before we start the HTTP call

  }

  getBoletos(): Observable<BoletoUser[]> {
    return this.http.get<BoletoUser[]>(API_URL_PRO+'apiBonoMostrar/').pipe(
        tap(data =>{data}),
        catchError(this.handleError)
    );
}


private handleError(err: HttpErrorResponse) {

  let errorMessage = '';
  if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
  } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
  console.error(errorMessage);
  return throwError(errorMessage);
}

}
