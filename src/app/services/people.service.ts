import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private _apiService:ApiService) { }
  
  get()
  {
   return this._apiService.get("people");
  }
}
