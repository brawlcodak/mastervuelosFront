import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../interfaces/flight.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResevationService {
  private apiUrl = 'https://master-vuelos-api.onrender.com/api/reservations'; // URL de la API de reservas

  constructor(private http: HttpClient) { }

  // Método para hacer una reserva para un vuelo
  makeReservation(flight: Flight): Observable<any> {
    return this.http.post<any>(this.apiUrl, flight);
  }

  getReservations(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.apiUrl);
  }
}
