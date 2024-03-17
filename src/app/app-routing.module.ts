import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightRegistrationComponent } from './flight-registration/flight-registration.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { StaticticsComponent } from './statictics/statictics.component';

const routes: Routes = [
  { path: 'flight-registration', component: FlightRegistrationComponent },
  { path: 'flight-search', component: FlightSearchComponent },
  { path: 'reservations', component: ReservationListComponent },
  { path: 'statictis', component: StaticticsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
