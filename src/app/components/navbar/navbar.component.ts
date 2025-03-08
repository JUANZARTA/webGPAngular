import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';  // Para enrutamiento de las rutas

@Component({
    selector: 'app-navbar',
    standalone: true, // Aquí
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule], // Usamos solo librerías
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;

}}
