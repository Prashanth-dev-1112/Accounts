import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private apiUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }

  //Calling api from mock-api-server.
  getAccounts = () => {
    return this.http.get(this.apiUrl);
  }

}
