import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const StyledHeader = styled.div`
  display: flex;
  flex-align: center;
  padding-top: 35px;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
  </StyledHeader>
);

export default Header;
