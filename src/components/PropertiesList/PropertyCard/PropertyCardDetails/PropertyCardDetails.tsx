import styled from "styled-components";
import { PropertyCardBadge } from "./PropertyCardBadge/PropertyCardBadge";
import { PropertyCardRating } from "./PropertyCardRating/PropertyCardRating";

const StyledPropertyCardDetails = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  color: #828282;
`;

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
