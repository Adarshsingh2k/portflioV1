import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LinkedinServiceService {
  username = 'adarshsingh2k';
  constructor(private http: HttpClient) {}

  // we can get data either from api and if api has error then get data from json
  public getLinkedinDataApi() {
    const httpHeaders = new HttpHeaders({
      //   'X-RapidAPI-Key': '226e0cc442mshb0890657c3054afp1db7a3jsn53e0f518c8f6',
      // 'X-RapidAPI-Host': 'linkedin-profile-data.p.rapidapi.com'
      'X-RapidAPI-Key': '226e0cc442mshb0890657c3054afp1db7a3jsn53e0f518c8f6',
      'X-RapidAPI-Host': 'fresh-linkedin-profile-data.p.rapidapi.com',
    });

    const url = `https://fresh-linkedin-profile-data.p.rapidapi.com/get-linkedin-profile?linkedin_url=https%3A%2F%2Fwww.linkedin.com%2Fin%2F${this.username}%2F&include_skills=true`;
    return this.http
      .get(url, {
        headers: httpHeaders,
      })
      .pipe(catchError(this.handleError));
  }

  public getLinkedinDataJson() {
    return this.http.get('../../../assets/linkedin_data.json');
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
    } else {
      // Server-side error
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Throw an observable with a user-facing error message
    return throwError('Something went wrong. Please try again later.');
  }
}
