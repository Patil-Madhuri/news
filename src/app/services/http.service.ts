/**
 * @file http.service.ts
 * @module to make http request
 * @author Madhuri
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn:"root"
})
export class HttpService {

  constructor(private http: HttpClient) { }
  
  /**function to respond for get call and return required data*/
  public httpGet(option: any): Observable<any> {
    var httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    if(option.params){
      httpAuthOptions['params'] = option.params 
    }
    return this.http.get(option.url, httpAuthOptions)
  }
  
}
