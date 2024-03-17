import { Component, OnInit } from '@angular/core';
import { StatictisService } from '../cores/services/statictis.service';
import { Flight } from '../cores/interfaces/flight.model';
import { FlightService } from '../cores/services/flight.service';
import { ResevationService } from '../cores/services/resevation.service';

@Component({
  selector: 'app-statictics',
  templateUrl: './statictics.component.html',
  styleUrls: ['./statictics.component.scss']
})
export class StaticticsComponent implements OnInit {
  topAirlines: Flight[] = [];
  result: any; 
  constructor(private statisticsService: StatictisService, private reservationsService: ResevationService) { }

  ngOnInit(): void {
    this.getAirlineStatistics();
    this.getReservations();
  }

  getAirlineStatistics(): void {
    this.statisticsService.searchFlights()
      .subscribe(
        (data: any) => {
          this.topAirlines = data;
          const airlineCounts = this.topAirlines.reduce((accumulator: any, flight) => {
            const airlineName = flight.airline;
            accumulator[airlineName] = (accumulator[airlineName] || 0) + 1;
            return accumulator;
        }, {});
            this.result = Object.keys(airlineCounts).map(airline => ({
          name: airline,
          count: airlineCounts[airline]
      }));
      console.log(this.result);
        },
        (error) => {
          alert('Error al obtener las estadísticas de aerolíneas');
        }
      );
  }

  getReservations(): void {
    this.reservationsService.getReservations()
    .subscribe(
      (data) => {
        console.log(data);
        this.result?.forEach((airline: any) => {
          airline.reservationsCount = 0;
        });
        data.forEach(reservation => {
          const airlineName = reservation.airline;
          const airline = this.result?.find((airline: any) => airline.name === airlineName);
          if (airline) {
            airline.reservationsCount++;
          }
        });
        console.log(this.result);
      }, (error) => {
        alert('Error al obtener las reservaciones de aerolíneas');
      }
    )
  }
}
