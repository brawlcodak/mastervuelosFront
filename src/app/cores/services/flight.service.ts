import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../interfaces/flight.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiUrl = 'http://localhost:3000/api/flights';
  constructor(private http: HttpClient) { }

  registerFlight(flight: Flight): Observable<any> {
    return this.http.post<Flight>(this.apiUrl, flight);
  }

  searchFlights(origin: string, destination: string, departureDate: string): Observable<Flight[]> {
    const url = `${this.apiUrl}?origin=${origin}&destination=${destination}&departureDate=${departureDate}`;
    return this.http.get<Flight[]>(url);
  }
}
