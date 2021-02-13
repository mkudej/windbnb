import SearchIcon from "@material-ui/icons/Search";
import { StyledHeaderSearchInputs, StyledHeaderSearchButton } from "./styles";

const HeaderSearchInputs = () => (
  <StyledHeaderSearchInputs>
    <StyledHeaderSearchButton>Add Location</StyledHeaderSearchButton>
    <StyledHeaderSearchButton>Add Guests</StyledHeaderSearchButton>
    <StyledHeaderSearchButton>
      <SearchIcon style={{ color: "#EB5757" }} />
    </StyledHeaderSearchButton>
  </StyledHeaderSearchInputs>
);

export default HeaderSearchInputs;
