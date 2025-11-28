
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from '../tokens/config.token';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = inject(API_BASE_URL);

  get<T>(path: string) { return this.http.get<T>(`${this.baseUrl}${path}`); }
  post<T>(path: string, body: any) { return this.http.post<T>(`${this.baseUrl}${path}`, body); }
  put<T>(path: string, body: any) { return this.http.put<T>(`${this.baseUrl}${path}`, body); }
  delete<T>(path: string) { return this.http.delete<T>(`${this.baseUrl}${path}`); }
}
