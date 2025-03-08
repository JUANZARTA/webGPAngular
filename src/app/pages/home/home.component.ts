import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, HttpClientModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  videos: any[] = [];
  selectedVideo: SafeResourceUrl | null = null;
  // Lista de imágenes para el carrusel cargadas desde JSON
  imagenes: any[] = [];

  // Lista de planes de servicios cargados desde JSON
  servicios: any[] = [];

  // Propiedad para almacenar el servicio seleccionado
  selectedService: any = null;

  // Inyectamos HttpClient para hacer la petición
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.cargarImagenesCarrusel();
    this.cargarServicios();
    this.cargarVideos();
  }

  // Método para cargar las imágenes del carrusel desde JSON
  cargarImagenesCarrusel() {
    if (this.imagenes.length === 0) { // Evita que se cargue de nuevo
      this.http.get<any[]>('assets/data/carrusel.json').subscribe(
        (data) => {
          this.imagenes = data;
          //console.log('Imágenes del carrusel cargadas:', this.imagenes);
        },
        (error) => {
         // console.error('Error al cargar las imágenes del carrusel:', error);
        }
      );
    }
  }

  // Método para cargar los servicios desde JSON
  cargarServicios() {
    if (this.servicios.length === 0) { // Evita que se vuelva a cargar si ya tiene datos
      this.http.get<any[]>('assets/data/servicios.json').subscribe(
        (data) => {
          this.servicios = data;
          //console.log('Servicios cargados:', this.servicios);
        },
        (error) => {
          //console.error('Error al cargar servicios:', error);
        }
      );
    }
  }

  // Método para seleccionar el servicio y actualizar el modal
  selectService(service: any) {
    this.selectedService = service;
  }

  cargarVideos() {
    this.http.get<any[]>('assets/data/videos.json').subscribe(
      (data) => {
        this.videos = data;
      },
      (error) => {
        console.error('Error al cargar los videos:', error);
      }
    );
  }

  abrirModalVideo(titulo: string) {
    console.log("🔍 Título recibido:", titulo);

    const videoData = this.videos.find(v => v.titulo.trim().toLowerCase() === titulo.trim().toLowerCase());

    if (videoData) {
      console.log("✅ Video encontrado:", videoData);
      this.selectedVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.getEmbedUrl(videoData.video));
    } else {
      console.warn("⚠️ No se encontró un video disponible para:", titulo);
      this.selectedVideo = null;
    }
  }

  getEmbedUrl(videoUrl: string): string {
    console.log("🎥 URL Original:", videoUrl);
    const videoIdMatch = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);

    if (videoIdMatch) {
      const embedUrl = `https://www.youtube.com/embed/${videoIdMatch[1]}`;
      console.log("🔗 Embed URL:", embedUrl);
      return embedUrl;
    } else {
      console.warn("⚠️ URL de YouTube inválida:", videoUrl);
      return "";
    }
  }

}
