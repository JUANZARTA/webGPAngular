import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Social } from '../models/social';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  private jsonUrl = 'assets/data/socials.json';

  constructor(private http: HttpClient) {}

  getRedesSociales(): Observable<Social[]> {
    return this.http.get<Social[]>(this.jsonUrl);
  }
}
