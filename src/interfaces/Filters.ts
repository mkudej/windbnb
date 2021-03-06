import { Dispatch, SetStateAction } from "react";
import { Guests } from "./Guests";
import { PropertyLocation } from "./PropertyLocation";
export interface Filters {
  guests: Guests;
  location: PropertyLocation;
  setLocation?: Dispatch<SetStateAction<PropertyLocation>>;
  setGuests?: Dispatch<SetStateAction<Guests>>;
}
