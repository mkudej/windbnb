import PropertiesList from "./components/PropertiesList/PropertiesList";
import { createGlobalStyle } from 'styled-components'
import { Property } from "./interfaces/Property";


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

  const properties: Property[] = [
    {
      "city": "Helsinki",
      "country": "Finland",
      "superHost": false,
      "title": "Stylist apartment in center of the city",
      "rating": 4.4,
      "maxGuests": 3,
      "type": "Entire apartment",
      "beds": 2,
      "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
    },
    {
      "city": "Turku",
      "country": "Finland",
      "superHost": false,
      "title": "Nice apartment in center of Helsinki",
      "rating": 4.2,
      "maxGuests": 5,
      "type": "Entire apartment",
      "beds": 3,
      "photo": "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
      "city": "Helsinki",
      "country": "Finland",
      "superHost": true,
      "title": "Arty interior in 1900 wooden house",
      "rating": 4.5,
      "maxGuests": 10,
      "type": "Entire house",
      "beds": 6,
      "photo": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    }
  ];

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
