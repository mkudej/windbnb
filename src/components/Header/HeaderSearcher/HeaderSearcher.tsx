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

const HeaderSearcher = () => (
  <>
    <ModalContent>
      <div className="wrapper">
        <StyledHeaderSearchInputs>
          <FilterWrapper>
            <Label>Location</Label>
            <div>Add Location</div>
            <LocationFilter />
          </FilterWrapper>

          <FilterWrapper>
            <Label>Guests</Label>
            <div>Add Guests</div>
            <GuestsFilter />
          </FilterWrapper>

          <SubmitButton>Search</SubmitButton>
        </StyledHeaderSearchInputs>
      </div>
    </ModalContent>
    <ModalBackground />
  </>
);

export default HeaderSearcher;
