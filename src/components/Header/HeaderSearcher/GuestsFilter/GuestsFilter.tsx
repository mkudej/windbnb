import styled from "styled-components";
import IntegerInput from "./IntegerInput/IntegerInput";

const StyledGuestsFilter = styled.div`
  position: absolute;
  top: 81px;
`;

const InputWrapper = styled.div`
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

const GuestsFilter = () => (
  <StyledGuestsFilter>
    <InputWrapper>
      <span>Adults</span>
      <span className="description">Ages 13 or above</span>
      <IntegerInput max={10} />
    </InputWrapper>
    <InputWrapper>
      <span>Children</span>
      <span className="description">Ages 2-12</span>
      <IntegerInput max={10} />
    </InputWrapper>
  </StyledGuestsFilter>
);

export default GuestsFilter;
