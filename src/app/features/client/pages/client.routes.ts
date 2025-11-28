
import { Routes } from '@angular/router';
import { HomeClientComponent } from './home-client/home-client.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { authGuard } from '../../../core/guards/auth.guard';
import { roleGuard } from '../../../core/guards/role.guard';

export const CLIENT_ROUTES: Routes = [
  { path: '', component: HomeClientComponent, 
    // canActivate: [authGuard, roleGuard(['client'])]
   },
  { path: 'reservations', component: ReservationsComponent, 
    // canActivate: [authGuard, roleGuard(['client'])] 
  },
  { path: 'messagerie', component: MessagerieComponent, 
    // canActivate: [authGuard, roleGuard(['client'])]
   }
];
