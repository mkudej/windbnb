import styled from "styled-components";
import { Property } from "../../interfaces/Property";
import PropertyCard from "./PropertyCard/PropertyCard";
import { PropertiesListHeader } from "./PropertiesListHeader/PropertiesListHeader";
import { PropertiesListCount } from "./PropertiesListHeader/PropertiesListCount";

const StyledPropertiesList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 35px;
  row-gap: 50px;
`;

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
