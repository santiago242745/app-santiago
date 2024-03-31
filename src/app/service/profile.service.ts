import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import Store from '../models/Store';
import { environment } from '../../environments/environment';
import  User  from '../models/user';
import ApiService from '../models/ApiService';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends Store<User[]>{
  protected readonly endpoint = environment.backendUrl + '/users/profile';

  constructor(private apiService: ApiService<User>) {
    super([]);
   }

  getInfoProfile(){
    console.log("entra service")
    //const response = await fetch(environment.backendUrl + '/users/profile')
    //return await response.json();
    //const response: any = await this.http.get(`${this.endpoint}/users/profile`);
    //console.log(response)
    //return response.json();
    console.log(this.endpoint)
    return this.apiService.getAll(this.endpoint);
 }
}
