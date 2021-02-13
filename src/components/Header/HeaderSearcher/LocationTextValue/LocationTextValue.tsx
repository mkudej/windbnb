interface LocationTextValueProps {
  value: string;
}

const LocationTextValue = ({ value }: LocationTextValueProps) => {
  if (value) {
    return <div>{value}</div>;
  }

  return <div>Add Location</div>;
};

export default LocationTextValue;
