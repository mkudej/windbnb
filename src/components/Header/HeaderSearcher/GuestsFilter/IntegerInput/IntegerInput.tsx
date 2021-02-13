import { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  position: relative;
  padding: 0;
  width: 25px;
  height: 25px;
  line-height: 25px;
  border: 1px solid #828282;
  border-radius: 4px;
  background: transparent;
  font-size: 20px;
`;

const InputValue = styled.div`
  font-size: 14px;
  font-weight: bold;
  min-width: 40px;
  text-align: center;
  padding: 0 5px;
`;

interface IntegerInputProps {
  max: number;
}

const IntegerInput = ({ max }: IntegerInputProps) => {
  const [value, setValue] = useState(0);

  const increase = () => {
    if (value < max) setValue(value + 1);
  };

  const decrease = () => {
    if (value > 0) setValue(value - 1);
  };

  return (
    <InputWrapper>
      <Button onClick={decrease}>-</Button>
      <InputValue>{value}</InputValue>
      <Button onClick={increase}>+</Button>
    </InputWrapper>
  );
};

export default IntegerInput;
