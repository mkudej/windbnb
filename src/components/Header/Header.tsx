import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import HeaderSearcher from "./HeaderSearcher/HeaderSearcher";
import HeaderSearchInputs from "./HeaderSearchInputs/HeaderSearchInputs";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding-top: 35px;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <HeaderSearchInputs />
    <HeaderSearcher />
  </StyledHeader>
);

export default Header;
