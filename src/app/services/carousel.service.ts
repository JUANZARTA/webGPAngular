import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarouselItem } from '../models/carousel';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  private jsonUrl = 'assets/data/carrusel.json';

  constructor(private http: HttpClient) {}

  getCarrusel(): Observable<CarouselItem[]> {
    return this.http.get<CarouselItem[]>(this.jsonUrl);
  }
}
