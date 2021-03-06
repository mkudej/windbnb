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
import { Dispatch, SetStateAction, useContext, useState } from "react";
import FiltersContext from "../../../context/Filters";
import { Guests } from "../../../interfaces/Guests";
import GuestsTextValue from "./GuestsTextValue/GuestsTextValue";
import LocationTextValue from "./LocationTextValue/LocationTextValue";
import { PropertyLocation } from "../../../interfaces/PropertyLocation";

interface HeaderSearcherProps {
  setVisibility: Dispatch<SetStateAction<boolean>>;
}

const HeaderSearcher = ({ setVisibility }: HeaderSearcherProps) => {
  const context = useContext(FiltersContext);

  const [locationVisibility, setLocationVisibility] = useState(false);
  const [guestsVisibility, setGuestVisibility] = useState(false);

  const [location, setLocation] = useState<PropertyLocation>(context.location);
  const [guests, setGuests] = useState<Guests>({
    adults: context.guests.adults,
    children: context.guests.children,
    total: context.guests.total,
  });

  const submitSearch = () => {
    context.setGuests(guests);
    context.setLocation(location);
    setVisibility(false);
  };

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
              <LocationTextValue location={location} />
              {locationVisibility && (
                <LocationFilter setLocation={setLocation} />
              )}
            </FilterWrapper>

            <FilterWrapper
              role="button"
              onClick={() => setGuestVisibility(!guestsVisibility)}
            >
              <Label>Guests</Label>
              <GuestsTextValue value={guests.total} />
              <GuestsFilter guests={guests} setGuests={setGuests} />
            </FilterWrapper>

            <SubmitButton onClick={submitSearch}>Search</SubmitButton>
          </StyledHeaderSearchInputs>
        </div>
      </ModalContent>
      <ModalBackground />
    </>
  );
};

export default HeaderSearcher;
