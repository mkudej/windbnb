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

const LocationFilter = () => {
  const initial = [
    {
      name: "Helsinki",
    },
    {
      name: "Helsinki",
    },
    {
      name: "Helsinki",
    },
    {
      name: "Helsinki",
    },
  ];
  return (
    <>
      <StyledLocationFilter>
        {initial.map(({ name }) => (
          <FilterLi>
            <FilterButton>
              <LocationOn style={{ color: "#4F4F4F", marginLeft: "-5px" }} />{" "}
              {name}, Finland
            </FilterButton>
          </FilterLi>
        ))}
      </StyledLocationFilter>
    </>
  );
};
export default LocationFilter;
