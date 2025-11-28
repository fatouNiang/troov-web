
import { Injectable, inject, signal } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../models/user.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = inject(ApiService);
  currentUser = signal<User | null>(null);
  token = signal<string | null>(null);

  login(credentials: { email: string; password: string; }) {
    return this.api.post<{ token: string; user: User }>('/auth/login', credentials)
      .pipe(tap(res => {
        this.token.set(res.token);
        this.currentUser.set(res.user);
      }));
  }

  logout() {
    this.token.set(null);
    this.currentUser.set(null);
  }

  isAuthenticated() { return !!this.token(); }
}
