
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'client',
    loadChildren: () => import('./features/client/pages/client.routes').then(m => m.CLIENT_ROUTES)
  },
  {
    path: 'prestataire',
    loadChildren: () => import('./features/prestataire/pages/prestataire.routes').then(m => m.PRESTA_ROUTES)
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/pages/admin.routes').then(m => m.ADMIN_ROUTES)
  },
  {
    path: '',
    loadChildren: () => import('./features/marketing/pages/marketing.routes').then(m => m.MARKETING_ROUTES)
  },
  { path: '**', redirectTo: '' }
];
