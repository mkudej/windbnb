import SearchIcon from "@material-ui/icons/Search";
import { Dispatch } from "react";
import { SetStateAction, useContext } from "react";
import FiltersContext from "../../../context/Filters";
import GuestsTextValue from "../HeaderSearcher/GuestsTextValue/GuestsTextValue";
import LocationTextValue from "../HeaderSearcher/LocationTextValue/LocationTextValue";
import { StyledHeaderSearchInputs, StyledHeaderSearchButton } from "./styles";

interface HeaderSearchInputsProps {
  setModalVisibility: Dispatch<SetStateAction<boolean>>;
}

const HeaderSearchInputs = ({
  setModalVisibility,
}: HeaderSearchInputsProps) => {
  const { location, guests } = useContext(FiltersContext);
  return (
    <StyledHeaderSearchInputs>
      <StyledHeaderSearchButton>
        <LocationTextValue location={location} />
      </StyledHeaderSearchButton>
      <StyledHeaderSearchButton>
        <GuestsTextValue value={guests.total} />
      </StyledHeaderSearchButton>
      <StyledHeaderSearchButton
        onClick={() => {
          setModalVisibility(true);
        }}
      >
        <SearchIcon style={{ color: "#EB5757" }} />
      </StyledHeaderSearchButton>
    </StyledHeaderSearchInputs>
  );
};

export default HeaderSearchInputs;
