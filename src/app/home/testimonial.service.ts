import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http:HttpClient) { }
  httpOption: any
  url="https://testimonialapi.toolcarton.com/api"

  getData() {
    return this.http.get(this.url, this.httpOption);
  }
}
