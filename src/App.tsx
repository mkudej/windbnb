import PropertiesList from "./components/PropertiesList/PropertiesList";
import { Property } from "./interfaces/Property";
import { fetchProperties } from "./services/properties-data.service";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import GlobalStyles from "./GlobalStyles";

function App() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    fetchProperties().then((data) => setProperties(data));
  }, []);

  return (
    <>
      <GlobalStyles />
      <div className="wrapper">
        <Header />
        <PropertiesList properties={properties} />
      </div>
    </>
  );
}

export default App;
