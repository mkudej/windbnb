import styled from "styled-components";

const PropertyImageWrapper = styled.div`
  display: block;
  min-height: 267px;
  margin-bottom: 15px;
`;

const PropertyImageCover = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 24px;
`;

const PropertyCardTitle = styled.p`
  font-size: 16px;
  color: #333333;
  font-weight: 600;
  margin: 12px 0 0 0;
`;

export { PropertyImageCover, PropertyCardTitle, PropertyImageWrapper };
