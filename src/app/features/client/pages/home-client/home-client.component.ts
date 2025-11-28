
import { Component, inject } from '@angular/core';
// import { ReservationService } from '../../../core/services/reservation.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { ReservationService } from '../../../../core/services/reservation.service';

@Component({
  selector: 'app-home-client',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  template: `
    <h1>Dashboard Client</h1>
    <section>
      <h3>Mes réservations</h3>
      <ul>
        <li *ngFor="let r of reservations$ | async">
          {{ r.serviceId }} – {{ r.status }} – {{ r.date }}
        </li>
      </ul>
    </section>
  `
})
export class HomeClientComponent {
  private reservationService = inject(ReservationService);
  reservations$ = this.reservationService.getAll();
}
