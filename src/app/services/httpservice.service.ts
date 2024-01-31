import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public URL: string = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getData(endpoint: string, data: any): Observable<any> {
    // console.log('service data passed', data);

    // Define the complete URL by concatenating the base URL and the endpoint
    const fullUrl = `${this.URL}/${endpoint}`;
    const params = data ? { params: data } : {};

    // Set up the headers using HttpHeaders
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'e6f584dcabmsheac98e2e7d8d754p148464jsn261a2a7a0afb',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    });

    // Make the GET request with the specified URL and headers
    return this.http.get(fullUrl, { ...params, headers: headers });
  }
}
