import SearchIcon from "@material-ui/icons/Search";
import { useContext } from "react";
import FiltersContext from "../../../context/Filters";
import GuestsTextValue from "../HeaderSearcher/GuestsTextValue/GuestsTextValue";
import LocationTextValue from "../HeaderSearcher/LocationTextValue/LocationTextValue";
import { StyledHeaderSearchInputs, StyledHeaderSearchButton } from "./styles";

const HeaderSearchInputs = () => {
  const { location, guests } = useContext(FiltersContext);
  return (
    <StyledHeaderSearchInputs>
      <StyledHeaderSearchButton>
        <LocationTextValue value={location} />
      </StyledHeaderSearchButton>
      <StyledHeaderSearchButton>
        <GuestsTextValue value={guests.total} />
      </StyledHeaderSearchButton>
      <StyledHeaderSearchButton>
        <SearchIcon style={{ color: "#EB5757" }} />
      </StyledHeaderSearchButton>
    </StyledHeaderSearchInputs>
  );
};

export default HeaderSearchInputs;
