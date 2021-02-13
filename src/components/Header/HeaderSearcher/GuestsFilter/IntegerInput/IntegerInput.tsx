import { InputWrapper, Button, InputValue } from "./styles";
interface IntegerInputProps {
  max: number;
  value: number;
  onChange: any;
}

const IntegerInput = ({ max, onChange, value }: IntegerInputProps) => {
  const increase = () => {
    if (value < max) {
      value++;
      onChange(value);
    }
  };

  const decrease = () => {
    if (value > 0) {
      value--;
      onChange(value);
    }
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
