import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const StyledHeaderSearchInputs = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin-left: auto;
`;

const StyledHeaderSearchButton = styled.button`
  display: flex;
  border: 0;
  background: transparent;
  outline: none;
  align-items: center;
  height: 55px;
  border-right: 1px solid #f2f2f2;
  padding: 0 16px;
  flex: 0 1;
  white-space: nowrap;
  :last-child {
    margin-left: auto;
    border: 0;
  }
`;

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
