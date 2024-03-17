import { Component } from '@angular/core';
import { Flight } from '../cores/interfaces/flight.model';
import { FlightService } from '../cores/services/flight.service';
import { ResevationService } from '../cores/services/resevation.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent {
  public origin: string = '';
  public destination: string = '';
  public departureDate: string = '';
  public flights: Flight[] = []; // Arreglo para almacenar los vuelos encontrados
  
  constructor(private flightService: FlightService,
    private reservationService: ResevationService) { }

  searchFlights(): void {
    if (this.origin && this.destination && this.departureDate) {
      this.flightService.searchFlights(this.origin, this.destination, this.departureDate)
        .subscribe((result: Flight[]) => {
          this.flights = result;
        });
    } else {
      alert('Por favor, complete todos los campos para realizar la búsqueda.');
    }
  }

  makeReservation(flight: Flight): void {
    this.reservationService.makeReservation(flight).subscribe(
      (response) => {
        alert('Reserva realizada con éxito!');
      },
      (error) => {
        alert('Error al hacer la reserva');
      }
    );
  }
}
