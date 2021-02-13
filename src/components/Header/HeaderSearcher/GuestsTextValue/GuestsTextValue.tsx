interface GuestsTextValueProps {
  value: number;
}

const GuestsTextValue = ({ value }: GuestsTextValueProps) => {
  if (value) {
    return value > 1 ? <div>{value} guests</div> : <div>{value} guest</div>;
  }

  return <div>Add Guests</div>;
};

export default GuestsTextValue;
