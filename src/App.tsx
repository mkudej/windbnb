import PropertiesList from "./components/PropertiesList/PropertiesList";
import { Property } from "./interfaces/Property";
import { Guests } from "./interfaces/Guests";
import { fetchProperties } from "./services/properties-data.service";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import FiltersContext from "./context/Filters";
import { PropertyLocation } from "./interfaces/PropertyLocation";

function App() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [guests, setGuests] = useState<Guests>({
    adults: 0,
    children: 0,
    total: 0,
  });
  const [location, setLocation] = useState<PropertyLocation>({
    city: "",
    country: "",
  });

  useEffect(() => {
    fetchProperties().then((data) => setProperties(data));
  }, []);

  return (
    <FiltersContext.Provider
      value={{ guests, location, setLocation, setGuests }}
    >
      <div className="wrapper">
        <Header />
        <PropertiesList
          guests={guests}
          location={location}
          properties={properties}
        />
      </div>
    </FiltersContext.Provider>
  );
}

export default App;
