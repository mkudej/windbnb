import styled from "styled-components";

export const ModalContent = styled.div`
  padding-top: 90px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  height: 460px;
`;

export const ModalBackground = styled.div`
  position: fixed;
  background: rgba(79, 79, 79, 0.4);
  top: 460px;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FilterWrapper = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  border-right: 1px solid #f2f2f2;
  padding: 0 25px;
  user-select: none;
  cursor: pointer;
`;

export const FilterButton = styled.button`
  text-align: left;
  cursor: pointer;
  background: transparent;
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Label = styled.label`
  display: block;
  font-size: 9px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const SubmitButton = styled.button`
  height: 48px;
  color: #fff;
  padding: 0 25px;
  background: #eb5757;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  margin: 0 130px;
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: none;
`;
