import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  protected readonly endpoint = environment.backendUrl

  constructor(private http: HttpClient) { }

  async getInfoProfile(): Promise<User[]> {
    const response = await fetch(environment.backendUrl + '/users/profile')
    return await response.json();
 }
}
