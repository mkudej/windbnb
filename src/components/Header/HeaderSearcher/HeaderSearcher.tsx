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
import { Guests } from "../../../interfaces/Guests";

interface HeaderSearcherProps {
  setVisibility: any;
}

const HeaderSearcher = ({ setVisibility }: HeaderSearcherProps) => {
  const context = useContext(FiltersContext);

  const [locationVisibility, setLocationVisibility] = useState(false);
  const [guestsVisibility, setGuestVisibility] = useState(false);

  const [location, setLocation] = useState(context.location);
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
              <div>{location ? <>{location}</> : <>Add Location</>}</div>
              {locationVisibility && (
                <LocationFilter setLocation={setLocation} />
              )}
            </FilterWrapper>

            <FilterWrapper
              role="button"
              onClick={() => setGuestVisibility(!guestsVisibility)}
            >
              <Label>Guests</Label>
              <div>
                {guests.total ? <>{guests.total} guests</> : <>Add Guests</>}
              </div>
              {/* {guestsVisibility && <GuestsFilter setGuests={setGuests} />} */}
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
