
import { Routes } from '@angular/router';
import { HomePrestaComponent } from './home-presta/home-presta.component';
import { ServicesComponent } from './services/services.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { authGuard } from '../../../core/guards/auth.guard';
import { roleGuard } from '../../../core/guards/role.guard';

export const PRESTA_ROUTES: Routes = [
  { path: '', component: HomePrestaComponent, 
    // canActivate: [authGuard, roleGuard(['prestataire'])] 
  },
  { path: 'services', component: ServicesComponent,
    //  canActivate: [authGuard, roleGuard(['prestataire'])]
     },
  { path: 'statistiques', component: StatistiquesComponent,
    //  canActivate: [authGuard, roleGuard(['prestataire'])] 
    }
];
