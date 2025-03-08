import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioService } from '../../services/portfolio.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PortfolioItem } from '../../models/portfolio';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portafolio: PortfolioItem[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit() {
    this.cargarPortafolio();
  }

  cargarPortafolio() {
    this.portfolioService.getPortafolio().subscribe(
      (data) => {
        this.portafolio = data.map(proyecto => ({
          ...proyecto,
          videoSeguro: this.portfolioService.getEmbedUrl(proyecto.video)
        }));
      },
      (error) => {
        console.error('Error al cargar el portafolio:', error);
      }
    );
  }
}
