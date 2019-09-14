import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeyService } from './key.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url="https://api.yelp.com/v3/businesses/search";
  private cors = "https://cors-anywhere.herokuapp.com/";
  constructor(
    private _http:HttpClient,
    private apiKey: KeyService
  ) { }

  search(data){
    const httpOptions ={
      headers: new HttpHeaders({
        'Authorization': this.apiKey.apiKey
      })
    }
     return this._http.get(`${this.cors}${this.url}${data}&limit=10`, httpOptions );
  }
}
