import PropertiesList from "./components/PropertiesList/PropertiesList";
import { createGlobalStyle } from "styled-components";
import { Property } from "./interfaces/Property";
import { fetchProperties } from "./services/properties-data.service";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";

const GlobalStyle = createGlobalStyle`  
  *{
    box-sizing: border-box;
  }

  .wrapper {
    max-width: 1255px;
    margin: 0 auto;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    font-size: 14px;
  }
`;

function App() {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    fetchProperties().then((data) => setProperties(data));
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="wrapper">
        <Header />
        <PropertiesList properties={properties} />
      </div>
    </>
  );
}

export default App;
