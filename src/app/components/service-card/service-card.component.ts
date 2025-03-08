import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SafeResourceUrl } from '@angular/platform-browser';

// Importamos los modelos
import { Service } from '../../models/service';
import { Video } from '../../models/video';

// Importamos los servicios
import { CarouselService } from '../../services/carousel.service';
import { ServicesService } from '../../services/servicios.service';
import { VideoService } from '../../services/video.service';

@Component({
    selector: 'app-service-card',
    imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
    templateUrl: './service-card.component.html',
    styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {
// Datos de Servicios
  servicios: Service[] = [];
  selectedService: Service | null = null; // Servicio seleccionado para el modal

  // Datos de Videos
  videos: Video[] = [];
  selectedVideo: SafeResourceUrl | null = null; // URL segura del video seleccionado

  constructor(
    private carouselService: CarouselService,
    private servicesService: ServicesService,
    private videoService: VideoService
  ) {}

  ngOnInit() {
    this.cargarServicios();
    this.cargarVideos();
  }

  // Cargar servicios desde el servicio
  cargarServicios() {
    this.servicesService.getServicios().subscribe(
      (data) => {
        this.servicios = data;
      },
      (error) => {
        console.error('Error al cargar servicios:', error);
      }
    );
  }

  // Cargar videos desde el servicio
  cargarVideos() {
    this.videoService.getVideos().subscribe(
      (data) => {
        this.videos = data;
      },
      (error) => {
        console.error('Error al cargar videos:', error);
      }
    );
  }

  // Método para seleccionar un servicio y mostrarlo en el modal
  selectService(service: Service) {
    this.selectedService = service;
  }

  // Método para abrir el modal del video
  abrirModalVideo(titulo: string) {
    console.log("🔍 Buscando video para:", titulo);

    const videoData = this.videos.find(v => v.titulo.trim().toLowerCase() === titulo.trim().toLowerCase());

    if (videoData) {
      console.log("✅ Video encontrado:", videoData);
      this.selectedVideo = this.videoService.getEmbedUrl(videoData.video);
    } else {
      console.warn("⚠️ No se encontró un video disponible para:", titulo);
      this.selectedVideo = null;
    }
  }
}
