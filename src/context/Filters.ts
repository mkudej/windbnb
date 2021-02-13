import { createContext } from "react";

interface Filters {
  guests: number;
  location: string;
}

const FiltersContext = createContext<Filters>({
  guests: 0,
  location: "",
});

export default FiltersContext;
