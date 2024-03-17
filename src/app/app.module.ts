import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightRegistrationComponent } from './flight-registration/flight-registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { StaticticsComponent } from './statictics/statictics.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightRegistrationComponent,
    FlightSearchComponent,
    ReservationListComponent,
    StaticticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
