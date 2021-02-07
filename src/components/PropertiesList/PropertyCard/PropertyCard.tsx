import styled from "styled-components";
import { Property } from "../../../interfaces/Property";
import { PropertyCardDetails } from "./PropertyCardDetails/PropertyCardDetails";
import { PropertyCardTitle } from "./PropertyCardTitle/PropertyCardTitle";
import { PropertyImageCover } from "./PropertyImageCover/PropertyImageCover";

const StyledPropertyCard = styled.div``;

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { photo, superHost, type, rating, title } = property;
  return (
    <StyledPropertyCard>
      <PropertyImageCover src={photo} alt="" />
      <PropertyCardDetails superHost={superHost} type={type} rating={rating} />
      <PropertyCardTitle>{title}</PropertyCardTitle>
    </StyledPropertyCard>
  );
};

export default PropertyCard;
