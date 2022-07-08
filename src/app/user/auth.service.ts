import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = "https://dummyjson.com/auth/login";
  
  constructor(private http: HttpClient) { }

  loginUser (user: any) {
    return this.http.post<any>(this.url, user)
  }

  loggedIn () {
    return !!localStorage.getItem('token')
  }

}
