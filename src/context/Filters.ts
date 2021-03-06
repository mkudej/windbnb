import { createContext } from "react";
import { Filters } from "../interfaces/Filters";

const FiltersContext = createContext<Filters>({
  guests: {
    adults: 0,
    children: 0,
    total: 0,
  },
  location: {
    city: "",
    country: "",
  },
  setGuests: () => {},
  setLocation: () => {},
});

export default FiltersContext;
