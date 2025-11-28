
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { API_BASE_URL, APP_CONFIG } from './core/tokens/config.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor, errorInterceptor])),
    { provide: API_BASE_URL, useValue: 'https://api.troov.example.com' },
    { provide: APP_CONFIG, useValue: { appName: 'TROOV', version: '0.0.1' } }
  ]
};
