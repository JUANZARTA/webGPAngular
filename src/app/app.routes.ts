import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProcessComponent } from './pages/process/process.component';
import { TermsComponent } from './pages/terms/terms.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: AboutComponent },
  { path: 'portafolio', component: PortfolioComponent },
  { path: 'cotizar', component: PricingComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'proceso', component: ProcessComponent },
  { path: 'terminos', component: TermsComponent },
  { path: '**', redirectTo: '' } // Redirige a Home si la ruta no existe
];
