import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  ApiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  Login(data: any) {
    return this.http.post<any>(this.ApiUrl + 'auth/login', data);
  }

  sendEmailPass(payload: any) {
    return this.http.post<any>(this.ApiUrl + 'auth/forgotPass', payload);
  }
}
