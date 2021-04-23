import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  theUrl = environment.theUrl;

  constructor(private httpClient: HttpClient) {}

  getUsers(){
    return this.httpClient.get(`${this.theUrl}`);
  }
  
  getSpecificUser(id){
    return this.httpClient.get(`${this.theUrl}/${id}`);

  }
}
