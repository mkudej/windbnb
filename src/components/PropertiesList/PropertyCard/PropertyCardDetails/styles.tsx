import styled from "styled-components";

const StyledPropertyCardDetails = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  color: #828282;
`;

const PropertyCardBadge = styled.div`
  border: 1px solid #4f4f4f;
  border-radius: 12px;
  height: 28px;
  line-height: 28px;
  padding: 0 10px;
  text-transform: uppercase;
  margin-right: 10px;
  font-weight: bold;
  font-size: 12px;
  font-weight: 700;
`;

const PropertyCardRating = styled.div`
  margin-left: auto;
`;

export { StyledPropertyCardDetails, PropertyCardBadge, PropertyCardRating };
