import { Property } from "../../interfaces/Property";
import PropertyCard from "./PropertyCard/PropertyCard";
import { PropertiesListHeader } from "./PropertiesListHeader/PropertiesListHeader";
import { PropertiesListCount } from "./PropertiesListHeader/PropertiesListCount";
import { StyledPropertiesList } from "./styles";
import { Guests } from "../../interfaces/Guests";
import { PropertyLocation } from "../../interfaces/PropertyLocation";

interface PropertiesListProps {
  properties: Property[];
  guests: Guests;
  location: PropertyLocation;
}

const filterPropertiesByGuests = (property: Property, guests: number) => {
  if (guests) {
    return guests <= property.maxGuests;
  }
  return true;
};

const filterPropertiesByLocation = (
  property: Property,
  { city }: PropertyLocation
) => {
  if (city.length > 0) {
    return city === property.city;
  }
  return true;
};

const PropertiesList = ({
  properties,
  guests,
  location,
}: PropertiesListProps) => (
  <>
    <PropertiesListHeader>
      <h4>Stays in Finland</h4>
      <PropertiesListCount>12 stays</PropertiesListCount>
    </PropertiesListHeader>

    <StyledPropertiesList>
      {properties
        .filter((property: Property) =>
          filterPropertiesByGuests(property, guests.total)
        )
        .filter((property: Property) =>
          filterPropertiesByLocation(property, location)
        )
        .map((property: Property) => (
          <PropertyCard property={property} key={property.title} />
        ))}
    </StyledPropertiesList>
  </>
);

export default PropertiesList;
