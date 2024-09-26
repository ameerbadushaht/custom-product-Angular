import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/auth';  // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  signUp(signUpData: { email: string, password: string, lastName: string ,firstName: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, signUpData);
  }
  login(signIn: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, signIn);
  }

}
