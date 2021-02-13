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
import { useState } from "react";

const HeaderSearcher = () => {
  const [locationVisibility, setLocationVisibility] = useState(false);
  const [guestsVisibility, setGuestVisibility] = useState(false);

  return (
    <>
      <ModalContent>
        <div className="wrapper">
          <StyledHeaderSearchInputs>
            <FilterWrapper
              role="button"
              onClick={() => setLocationVisibility(!locationVisibility)}
            >
              <Label>Location</Label>
              <div>Add Location</div>
              {locationVisibility && <LocationFilter />}
            </FilterWrapper>

            <FilterWrapper
              role="button"
              onClick={() => setGuestVisibility(!guestsVisibility)}
            >
              <Label>Guests</Label>
              <div>Add Guests</div>
              {guestsVisibility && <GuestsFilter />}
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
