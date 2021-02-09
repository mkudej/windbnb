import { Property } from "../../../interfaces/Property";
import { PropertyCardDetails } from "./PropertyCardDetails/PropertyCardDetails";
import { PropertyCardTitle, PropertyImageCover } from "./styles";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const { photo, superHost, type, rating, title } = property;
  return (
    <div>
      <PropertyImageCover src={photo} alt="" />
      <PropertyCardDetails superHost={superHost} type={type} rating={rating} />
      <PropertyCardTitle>{title}</PropertyCardTitle>
    </div>
  );
};

export default PropertyCard;
