export interface Flight {
  id: number;
  origin: string;
  destination: string;
  departureDate: Date;
  arrivalDate: Date;
  airline: string;
  price: number;
}