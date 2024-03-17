import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flight } from '../interfaces/flight.model';

@Injectable({
  providedIn: 'root'
})
export class StatictisService {
  private apiUrl = 'http://localhost:3000/api/flights';

  constructor(private http: HttpClient) { }

  getAirlineStatistics(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  searchFlights(): Observable<any> {
    return this.http.get<Flight>(this.apiUrl);
  }
}
