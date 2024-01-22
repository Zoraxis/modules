import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, firstValueFrom, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ModuleCategory } from '../../models/ModuleCategory';
import { Module } from '../../models/Module';

@Injectable()
export class ApiService {
  api: string =
    'https://babtec-vas-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(private http: HttpClient) {}

  private get(props: string): Observable<ModuleCategory[] | Module> {
    return this.http
      .get<ModuleCategory[] | Module>(`${this.api}${props}.json`)
      .pipe(catchError(this.handleError));
  }

  async fetchModules(props: string = ''): Promise<ModuleCategory[] | Module> {
    const res = this.get(props);
    const data = await firstValueFrom(res);

    return data
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
