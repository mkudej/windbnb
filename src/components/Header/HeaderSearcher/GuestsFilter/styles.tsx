import styled from "styled-components";

export const StyledGuestsFilter = styled.div`
  position: absolute;
  top: 81px;
`;

export const FilterWrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 50px;
  }

  span {
    display: block;
    &.description {
      opacity: 0.5;
      margin-bottom: 12px;
    }
  }
`;
