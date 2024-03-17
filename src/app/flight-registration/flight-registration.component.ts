import { Component } from '@angular/core';
import { FlightService } from '../cores/services/flight.service';
import { Flight } from '../cores/interfaces/flight.model';

@Component({
  selector: 'app-flight-registration',
  templateUrl: './flight-registration.component.html',
  styleUrls: ['./flight-registration.component.scss']
})
export class FlightRegistrationComponent {
  public flight: Flight = {} as Flight; 
  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.flightService.registerFlight(this.flight).subscribe(
      (response) => {
        alert('Vuelo registrado con éxito');
      },
      (error) => {
        alert('Error al registrar vuelo');
      }
    );
  }
}
