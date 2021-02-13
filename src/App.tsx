import PropertiesList from "./components/PropertiesList/PropertiesList";
import { Property } from "./interfaces/Property";
import { Guests } from "./interfaces/Guests";
import { fetchProperties } from "./services/properties-data.service";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import FiltersContext from "./context/Filters";

function App() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [guests, setGuests] = useState<Guests>({
    adults: 0,
    children: 0,
    total: 0,
  });
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetchProperties().then((data) => setProperties(data));
  }, []);

  return (
    <FiltersContext.Provider
      value={{ guests, location, setLocation, setGuests }}
    >
      <div className="wrapper">
        <Header />
        <PropertiesList properties={properties} />
      </div>
    </FiltersContext.Provider>
  );
}

export default App;
