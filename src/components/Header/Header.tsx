import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import HeaderSearcher from "./HeaderSearcher/HeaderSearcher";
import HeaderSearchInputs from "./HeaderSearchInputs/HeaderSearchInputs";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding-top: 35px;
`;

const Header = () => {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <StyledHeader>
      <Logo />
      <HeaderSearchInputs />
      <button
        onClick={() => {
          setModalVisibility(!modalVisibility);
        }}
      >
        test
      </button>
      {modalVisibility && <HeaderSearcher />}
    </StyledHeader>
  );
};

export default Header;
