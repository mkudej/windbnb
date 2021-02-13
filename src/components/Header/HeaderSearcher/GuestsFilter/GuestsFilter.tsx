import IntegerInput from "./IntegerInput/IntegerInput";
import { FilterWrapper, StyledGuestsFilter } from "./styles";

const GuestsFilter = () => (
  <StyledGuestsFilter>
    <FilterWrapper>
      <span>Adults</span>
      <span className="description">Ages 13 or above</span>
      <IntegerInput max={10} />
    </FilterWrapper>
    <FilterWrapper>
      <span>Children</span>
      <span className="description">Ages 2-12</span>
      <IntegerInput max={10} />
    </FilterWrapper>
  </StyledGuestsFilter>
);

export default GuestsFilter;
