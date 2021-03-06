import { Guests } from "./Guests";
import { PropertyLocation } from "./PropertyLocation";
export interface Filters {
  guests: Guests;
  location: PropertyLocation;
  setLocation: (location: PropertyLocation) => void;
  setGuests: (guests: Guests) => void;
}
