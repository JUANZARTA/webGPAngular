import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private jsonUrl = 'assets/data/servicios.json';

  constructor(private http: HttpClient) {}

  getServicios(): Observable<Service[]> {
    return this.http.get<Service[]>(this.jsonUrl);
  }
}
