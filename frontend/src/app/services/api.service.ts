import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  theUrl = environment.theUrl;

  constructor(private httpClient: HttpClient) {}
//Get all users from the api
  getUsers(){
    return this.httpClient.get(`${this.theUrl}`);
  }
 //Request specific user from the api
  getSpecificUser(id){
    return this.httpClient.get(`${this.theUrl}/${id}`);

  }
}
