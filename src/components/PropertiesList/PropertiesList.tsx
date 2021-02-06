import styled from "styled-components";
import { Property } from "../../interfaces/Property";
import PropertyCard from "./components/PropertyCard/PropertyCard";

const StyledPropertiesList = styled.div`
    width: 1255px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 35px;
    row-gap: 50px;
`;

interface PropertiesListProps {
    properties: Property[];
}

const PropertiesList = ({properties}: PropertiesListProps) => (
    <StyledPropertiesList>
        {properties.map( (property: Property) => <PropertyCard property={property} key={property.title} /> )}
    </StyledPropertiesList>
)

export default PropertiesList;