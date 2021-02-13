import { StyledHeaderSearchInputs } from "../HeaderSearchInputs/styles";
import {
  Label,
  ModalBackground,
  ModalContent,
  SubmitButton,
  FilterWrapper,
} from "./styles";
import LocationFilter from "./LocationFilter/LocationFilter";
import GuestsFilter from "./GuestsFilter/GuestsFilter";
import { useContext, useState } from "react";
import FiltersContext from "../../../context/Filters";

const HeaderSearcher = () => {
  const { guests, location } = useContext(FiltersContext);
  const [locationFilterVisibility, setLocationFilterVisibility] = useState(
    false
  );
  const [guestsFilterVisibility, setGuestFilterVisibility] = useState(false);

  return (
    <>
      <ModalContent>
        <div className="wrapper">
          <StyledHeaderSearchInputs>
            <FilterWrapper
              role="button"
              onClick={() =>
                setLocationFilterVisibility(!locationFilterVisibility)
              }
            >
              <Label>Location</Label>
              <div>{location ? <>{location}</> : <>Add Location</>}</div>
              {locationFilterVisibility && <LocationFilter />}
            </FilterWrapper>

            <FilterWrapper
              role="button"
              onClick={() => setGuestFilterVisibility(!guestsFilterVisibility)}
            >
              <Label>Guests</Label>
              <div>{guests ? <>{guests} guests</> : <>Add Guests</>}</div>
              {guestsFilterVisibility && <GuestsFilter />}
            </FilterWrapper>

            <SubmitButton>Search</SubmitButton>
          </StyledHeaderSearchInputs>
        </div>
      </ModalContent>
      <ModalBackground />
    </>
  );
};

export default HeaderSearcher;
