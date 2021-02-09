import {
  PropertyCardBadge,
  PropertyCardRating,
  StyledPropertyCardDetails,
} from "./styles";

interface PropertyCardDetailsProps {
  superHost: boolean;
  type: string;
  rating: number;
}

export const PropertyCardDetails = ({
  superHost,
  type,
  rating,
}: PropertyCardDetailsProps) => (
  <StyledPropertyCardDetails>
    {superHost === true && <PropertyCardBadge>super host</PropertyCardBadge>}
    <span>{type}</span>
    <PropertyCardRating>{rating}</PropertyCardRating>
  </StyledPropertyCardDetails>
);
