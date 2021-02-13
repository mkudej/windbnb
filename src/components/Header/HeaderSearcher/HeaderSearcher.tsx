import { StyledHeaderSearchInputs } from "../HeaderSearchInputs/styles";
import { Label, ModalBackground, ModalContent, SubmitButton } from "./styles";
import LocationFilter from "./LocationFilter/LocationFilter";
import styled from "styled-components";
import GuestsFilter from "./GuestsFilter/GuestsFilter";

const FilterWrapper = styled.div`
  flex: 1;
  border-right: 1px solid #f2f2f2;
  padding: 0 25px;
`;

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
