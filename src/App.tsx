import PropertiesList from "./components/PropertiesList/PropertiesList";
import { createGlobalStyle } from 'styled-components'
import { Property } from "./interfaces/Property";
import { fetchProperties } from "./services/properties-data.service";
import { useEffect, useState } from "react";


const GlobalStyle = createGlobalStyle`  
  *{
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
  }
`

function App() {

  const [properties, setProperties] = useState<Property[]>([])

  useEffect(() => {
    fetchProperties().then((data) => setProperties(data));
  }, []);

  return (
    <>
    <GlobalStyle />
    <div className="App">
      <PropertiesList properties={properties} />
    </div>
    </>
  );
}

export default App;
