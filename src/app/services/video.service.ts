import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../models/video';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private jsonUrl = 'assets/data/videos.json';

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.jsonUrl);
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
