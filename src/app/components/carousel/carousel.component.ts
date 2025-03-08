import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselService } from '../../services/carousel.service';
import { CarouselItem } from '../../models/carousel';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  standalone: true,  // <--- Asegúrate de que sea standalone
  imports: [CommonModule, HttpClientModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  // Datos del Carrusel
    imagenes: CarouselItem[] = [];

  constructor(private carouselService: CarouselService) {}

  ngOnInit() {
    this.cargarImagenesCarrusel();
  }
  // Cargar imágenes del carrusel desde el servicio
  cargarImagenesCarrusel() {
    this.carouselService.getCarrusel().subscribe(
      (data) => {
        console.log("✅ Datos recibidos:", data); // <-- Agrega este log para depurar
        this.imagenes = data;
      },
      (error) => {
        console.error('❌ Error al cargar el carrusel:', error);
      }
    );
  }
  
}
