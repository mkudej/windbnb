import { Property } from "../../interfaces/Property";
import PropertyCard from "./PropertyCard/PropertyCard";
import { PropertiesListHeader } from "./PropertiesListHeader/PropertiesListHeader";
import { PropertiesListCount } from "./PropertiesListHeader/PropertiesListCount";
import { StyledPropertiesList } from "./styles";

interface PropertiesListProps {
  properties: Property[];
}

const PropertiesList = ({ properties }: PropertiesListProps) => (
  <>
    <PropertiesListHeader>
      <h4>Stays in Finland</h4>
      <PropertiesListCount>12 stays</PropertiesListCount>
    </PropertiesListHeader>

    <StyledPropertiesList>
      {properties.map((property: Property) => (
        <PropertyCard property={property} key={property.title} />
      ))}
    </StyledPropertiesList>
  </>
);

export default PropertiesList;
