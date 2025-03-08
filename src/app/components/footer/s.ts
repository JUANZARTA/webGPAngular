import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SocialService } from '../../services/social.service';
import { Social } from '../../models/social';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  redesSociales: Social[] = [];

  constructor(private socialService: SocialService) {}

  ngOnInit() {
    this.socialService.getRedesSociales().subscribe(
      (data) => {
        this.redesSociales = data;
      },
      (error) => {
        console.error("❌ Error al cargar las redes sociales:", error);
      }
    );
  }
}
