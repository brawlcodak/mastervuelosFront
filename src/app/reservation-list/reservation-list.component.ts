import { Component, OnInit } from '@angular/core';
import { Flight } from '../cores/interfaces/flight.model';
import { ResevationService } from '../cores/services/resevation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {
  reservations: Flight[] = [];
  currentDate: string = '';
  constructor(private reservationService: ResevationService) {
    this.currentDate = new Date().toDateString();
  }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    this.reservationService.getReservations()
      .subscribe(
        (reservations: Flight[]) => {
          this.reservations = reservations;
        },
        (error) => {
          console.error('Error al obtener las reservaciones:', error);
        }
      );
  }
}
