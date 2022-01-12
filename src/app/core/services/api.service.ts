import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _httpClient:HttpClient) { }
  get(url:string)
  {
    return this._httpClient.get(`${environment.apiURL}/${url}`);
  }
  getData(url:string)
  {
    return this._httpClient.get(`${environment.apiURL}/${url}`, {observe: 'response'});
  }
 
}
