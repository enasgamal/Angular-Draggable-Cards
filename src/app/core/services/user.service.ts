import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _apiService:ApiService) { }
  
  get(number: any)
  {
   return this._apiService.get(`people/?page=${number}`); 
  }

  getData() {
    return this._apiService.getData(`people/`);
  }
 

}
