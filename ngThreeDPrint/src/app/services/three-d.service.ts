import { ThreeDPrint } from './../models/three-dprint';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThreeDService {

  private url = environment.baseUrl + 'api/prints';

  constructor(private http: HttpClient) { }

  index() {
    return this.http.get<ThreeDPrint[]>(this.url)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM');
      })
      );
    }

    create(newThreeDPrint: ThreeDPrint) {
      return this.http.post<ThreeDPrint>(this.url, newThreeDPrint)
      .pipe(
        catchError(
          (err: any) => {
            console.log(err);
            return throwError('httpClient threw error creating ThreeDPrint Service')
          }
          )
          );
        }

    update(id: number, threeDPrint: ThreeDPrint) {
      return this.http.put<ThreeDPrint>(this.url + "/" + id, threeDPrint)
      .pipe(
        catchError(
          (err: any) => {
            console.log(err);
            return throwError('httpClient threw error creating Todo Service')
          }
        )
      );
    }

    destroy(id: number) {
      return this.http.delete<ThreeDPrint>(this.url + "/" + id)
      .pipe(
        catchError(
          (err: any) => {
            console.log(err);
            return throwError('httpClient threw error creating ThreeDPrint Service')
          }
        )
      );
  }



}
