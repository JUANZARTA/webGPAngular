import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PortfolioItem } from '../models/portfolio';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private jsonUrl = 'assets/data/portfolio.json';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  getPortafolio(): Observable<PortfolioItem[]> {
    return this.http.get<PortfolioItem[]>(this.jsonUrl);
  }

  getEmbedUrl(videoUrl: string): SafeResourceUrl {
    const videoIdMatch = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
    if (videoIdMatch) {
      const embedUrl = `https://www.youtube.com/embed/${videoIdMatch[1]}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
}
