
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const roleGuard = (roles: Array<'client' | 'prestataire' | 'admin'>): CanActivateFn => {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    const user = auth.currentUser();
    if (user && roles.includes(user.role)) return true;
    router.navigateByUrl('/');
    return false;
  };
};
