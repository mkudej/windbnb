import { PropertyLocation } from "../../../../interfaces/PropertyLocation";

interface LocationTextValueProps {
  location: PropertyLocation;
}

const LocationTextValue = ({ location }: LocationTextValueProps) => {
  if (location.city.length) {
    return (
      <div>
        {location.city} {location.country}
      </div>
    );
  }

  return <div>Add Location</div>;
};

export default LocationTextValue;
