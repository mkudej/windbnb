import styled from "styled-components";

const StyledHeaderSearchInputs = styled.div`
  display: flex;
  align-items: stretch;
  background: #ffffff;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin-left: auto;
`;

const StyledHeaderSearchButton = styled.button`
  position: relative;
  border: 0;
  background: transparent;
  outline: none;
  height: 55px;
  border-right: 1px solid #f2f2f2;
  padding: 0 16px;
  flex: 1 0;
  text-align: left;
  white-space: nowrap;
  :last-child {
    margin-left: auto;
    border: 0;
  }
`;

export { StyledHeaderSearchButton, StyledHeaderSearchInputs };
