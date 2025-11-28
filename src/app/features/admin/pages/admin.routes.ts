
import { Routes } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { PaiementsComponent } from './paiements/paiements.component';
import { authGuard } from '../../../core/guards/auth.guard';
import { roleGuard } from '../../../core/guards/role.guard';

export const ADMIN_ROUTES: Routes = [
  { path: '', component: HomeAdminComponent,
    //  canActivate: [authGuard, roleGuard(['admin'])]
     },
  { path: 'utilisateurs', component: UtilisateursComponent,
    //  canActivate: [authGuard, roleGuard(['admin'])]
     },
  { path: 'paiements', component: PaiementsComponent,
    // canActivate: [authGuard, roleGuard(['admin'])]
   }
];
