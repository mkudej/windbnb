import { StyledHeaderSearchInputs } from "../HeaderSearchInputs/styles";
import {
  Label,
  ModalBackground,
  ModalContent,
  SubmitButton,
  FilterWrapper,
  ClearButton,
  FilterButton,
} from "./styles";
import LocationFilter from "./LocationFilter/LocationFilter";
import GuestsFilter from "./GuestsFilter/GuestsFilter";
import { Dispatch, SetStateAction, useContext, useRef, useState } from "react";
import FiltersContext from "../../../context/Filters";
import { Guests } from "../../../interfaces/Guests";
import GuestsTextValue from "./GuestsTextValue/GuestsTextValue";
import LocationTextValue from "./LocationTextValue/LocationTextValue";
import { PropertyLocation } from "../../../interfaces/PropertyLocation";
import Close from "@material-ui/icons/Close";
import { useClickedOutside } from "../../../hooks/useClickedOutside";

interface HeaderSearcherProps {
  setVisibility: Dispatch<SetStateAction<boolean>>;
}

const HeaderSearcher = ({ setVisibility }: HeaderSearcherProps) => {
  const locationFilterRef = useRef(null);
  const guestsFilterRef = useRef(null);
  const searcherRef = useRef(null);
  const context = useContext(FiltersContext);

  const [locationVisibility, setLocationVisibility] = useState(false);
  const [guestsVisibility, setGuestVisibility] = useState(false);

  const [location, setLocation] = useState<PropertyLocation>(context.location);
  const [guests, setGuests] = useState<Guests>({
    adults: context.guests.adults,
    children: context.guests.children,
    total: context.guests.total,
  });

  useClickedOutside(locationFilterRef, () => {
    setLocationVisibility(false);
  });

  useClickedOutside(guestsFilterRef, () => {
    setGuestVisibility(false);
  });

  const submitSearch = () => {
    context.setGuests(guests);
    context.setLocation(location);
    hideSearchModal();
  };

  const hideSearchModal = () => {
    setVisibility(false);
  };

  const clearLocationFilter = () => {
    setLocation({
      city: "",
      country: "",
    });
  };

  const clearGuestsFilter = () => {
    setGuests({
      adults: 0,
      children: 0,
      total: 0,
    });
  };

  return (
    <>
      <ModalContent ref={searcherRef}>
        <div className="wrapper">
          <StyledHeaderSearchInputs>
            <FilterWrapper ref={locationFilterRef}>
              <FilterButton
                onClick={() => setLocationVisibility(!locationVisibility)}
              >
                <Label>Location</Label>
                <LocationTextValue location={location} />
              </FilterButton>

              {location.city && (
                <ClearButton onClick={clearLocationFilter}>
                  <Close />
                </ClearButton>
              )}

              {locationVisibility && (
                <LocationFilter
                  setLocationVisibility={setLocationVisibility}
                  setLocation={setLocation}
                />
              )}
            </FilterWrapper>

            <FilterWrapper ref={guestsFilterRef}>
              <FilterButton
                onClick={() => setGuestVisibility(!guestsVisibility)}
              >
                <Label>Guests</Label>
                <GuestsTextValue value={guests.total} />
              </FilterButton>

              {guests.total > 0 && (
                <ClearButton onClick={clearGuestsFilter}>
                  <Close />
                </ClearButton>
              )}

              {guestsVisibility && (
                <GuestsFilter guests={guests} setGuests={setGuests} />
              )}
            </FilterWrapper>

            <SubmitButton onClick={submitSearch}>Search</SubmitButton>
          </StyledHeaderSearchInputs>
        </div>
      </ModalContent>
      <ModalBackground onClick={hideSearchModal} />
    </>
  );
};

export default HeaderSearcher;
