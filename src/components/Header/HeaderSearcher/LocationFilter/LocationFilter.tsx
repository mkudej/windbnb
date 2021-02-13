import styled from "styled-components";
import LocationOn from "@material-ui/icons/LocationOn";

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
  setLocation: any;
}

const LocationFilter = ({ setLocation }: LocationFilterProps) => {
  const initial = [
    {
      name: "Helsinki, Finland",
    },
    {
      name: "Turku, Finland",
    },
    {
      name: "Oulu, Finland",
    },
    {
      name: "Vassa, Finland",
    },
  ];

  const selectLocation = (location: string) => {
    setLocation(location);
  };

  return (
    <>
      <StyledLocationFilter>
        {initial.map(({ name }) => (
          <FilterLi>
            <FilterButton onClick={() => selectLocation(name)}>
              <LocationOn style={{ color: "#4F4F4F", marginLeft: "-5px" }} />{" "}
              {name}
            </FilterButton>
          </FilterLi>
        ))}
      </StyledLocationFilter>
    </>
  );
};
export default LocationFilter;
