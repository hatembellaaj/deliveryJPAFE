import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Restaurant[]>('http://192.168.1.108:8080/Restaurant');
  }


}
