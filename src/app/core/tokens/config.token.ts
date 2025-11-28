
import { InjectionToken } from '@angular/core';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');
export const APP_CONFIG = new InjectionToken<Record<string, any>>('APP_CONFIG');
