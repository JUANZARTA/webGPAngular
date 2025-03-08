import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  private serviciosUrl = 'assets/data/servicios.json';

  constructor(private http: HttpClient) {}

  obtenerServicios(): Observable<any[]> {
    return this.http.get<any[]>(this.serviciosUrl);
  }
}
