import { Guests } from "./Guests";

export interface Filters {
  guests: Guests;
  location: string;
  setLocation?: any;
  setGuests?: any;
}
