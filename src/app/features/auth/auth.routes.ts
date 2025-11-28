
import { Routes } from '@angular/router';
// import { HomeClientComponent } from '../client/pages/home-client/home-client.component';
// import { ReservationsComponent } from '../client/pages/reservations/reservations.component';
// import { MessagerieComponent } from '../client/pages/messagerie/messagerie.component';
import { authGuard } from '../../core/guards/auth.guard';
import { roleGuard } from '../../core/guards/role.guard';
import { Login } from './login/login';
import { Register } from './register/register';

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: Login, 
    // canActivate: [authGuard, roleGuard(['client'])]
   },
  { path: 'register', component: Register, 
    // canActivate: [authGuard, roleGuard(['client'])] 
  },
  // { path: 'messagerie', component: MessagerieComponent, 
  //   // canActivate: [authGuard, roleGuard(['client'])]
  //  }
];
