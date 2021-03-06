import styled from "styled-components";
import LocationOn from "@material-ui/icons/LocationOn";
import { PropertyLocation } from "../../../../interfaces/PropertyLocation";
import { Dispatch, SetStateAction } from "react";

const StyledLocationFilter = styled.ul`
  position: absolute;
  top: 42px;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const FilterLi = styled.li`
  padding-top: 35px;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  font-size: 14px;
  padding: 0;
`;

interface LocationFilterProps {
  setLocation: Dispatch<SetStateAction<PropertyLocation>>;
  setLocationVisibility: Dispatch<SetStateAction<boolean>>;
}

const LocationFilter = ({
  setLocation,
  setLocationVisibility,
}: LocationFilterProps) => {
  const initial = [
    {
      city: "Helsinki",
      country: "Finland",
    },
    {
      city: "Turku",
      country: "Finland",
    },
    {
      city: "Oulu",
      country: "Finland",
    },
    {
      city: "Vassa",
      country: "Finland",
    },
  ];

  const selectLocation = (location: PropertyLocation) => {
    setLocation(location);
    setLocationVisibility(false);
  };

  return (
    <StyledLocationFilter>
      {initial.map(({ city, country }) => (
        <FilterLi key={city}>
          <FilterButton onClick={() => selectLocation({ city, country })}>
            <LocationOn style={{ color: "#4F4F4F", marginLeft: "-5px" }} />
            {city}, {country}
          </FilterButton>
        </FilterLi>
      ))}
    </StyledLocationFilter>
  );
};
export default LocationFilter;
