import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse, HttpHeaders} from '@angular/common/http'
import { Observable,throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import {BoletoUser} from '../shared/models/boleto.model';
const API_URL_DEV: string = 'https://server-utp.herokuapp.com/api/';
const API_URL_PRO: string = 'http://127.0.0.1:8000/api/';
@Injectable({
  providedIn: 'root'
})
export class BoletosService {


  constructor(private http: HttpClient) {


  }

  getBoletos(): Observable<BoletoUser[]> {
    return this.http.get<BoletoUser[]>(API_URL_DEV+'apiBonoMostrar/').pipe(tap(data=>data),catchError(this.handleError)
    );
}
deleteBoleto(code:Number):Observable<BoletoUser[]>{
  return this.http.delete<BoletoUser[]>(API_URL_DEV+'apiBonoBorrar/'+code).pipe(tap(data=>data),catchError(this.handleError));
}
updateBoleto(code:Number,request:any):Observable<BoletoUser[]>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  return this.http.put<BoletoUser[]>(API_URL_DEV+'apiBonoCambiar/'+code,request).pipe(tap(data=>data),catchError(this.handleError));
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
