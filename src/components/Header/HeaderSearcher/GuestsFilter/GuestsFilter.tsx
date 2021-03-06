import { Dispatch, SetStateAction } from "react";
import { Guests } from "../../../../interfaces/Guests";
import IntegerInput from "./IntegerInput/IntegerInput";
import { FilterWrapper, StyledGuestsFilter } from "./styles";

interface GuestsFilterProps {
  guests: Guests;
  setGuests: Dispatch<SetStateAction<Guests>>;
}

const GuestsFilter = ({ guests, setGuests }: GuestsFilterProps) => {
  const changeAdults = (value: number) => {
    setGuests({ ...guests, adults: value, total: value + guests.children });
  };

  const changeChildren = (value: number) => {
    setGuests({ ...guests, children: value, total: value + guests.adults });
  };

  return (
    <StyledGuestsFilter>
      <FilterWrapper>
        <span>Adults</span>
        <span className="description">Ages 13 or above</span>
        <IntegerInput value={guests.adults} onChange={changeAdults} max={10} />
      </FilterWrapper>
      <FilterWrapper>
        <span>Children</span>
        <span className="description">Ages 2-12</span>
        <IntegerInput
          value={guests.children}
          onChange={changeChildren}
          max={10}
        />
      </FilterWrapper>
    </StyledGuestsFilter>
  );
};

export default GuestsFilter;
