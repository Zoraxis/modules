import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {
  api: string =
    'https://babtec-vas-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) {}

  //TODO: use types instead of any
  getAll(props: string = ''): Observable<any> {
    return this.http
      .get(`${this.api}${props}.json`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(error.error.message);
    } else {
      console.log(error);
    }
    return throwError(console.log('Something is wrong!'));
  }
}
