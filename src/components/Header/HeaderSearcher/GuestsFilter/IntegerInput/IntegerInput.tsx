import { useState } from "react";
import { InputWrapper, Button, InputValue } from "./styles";

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
