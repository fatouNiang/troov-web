
import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';
import { Reservation } from '../models/reservation.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  private api = inject(ApiService);

  getAll(): Observable<Reservation[]> {
    return this.api.get<Reservation[]>('/reservations');
  }
}
