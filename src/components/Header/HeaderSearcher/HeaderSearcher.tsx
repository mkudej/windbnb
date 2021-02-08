import styled from "styled-components";

const StyledHeaderSearcher = styled.div`
  padding-top: 90px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  height: 460px;
`;

const SearcherBodyOverlay = styled.div`
  position: fixed;
  background: rgba(79, 79, 79, 0.4);
  top: 460px;
  bottom: 0;
  left: 0;
  right: 0;
`;

const HeaderSearcher = () => (
  <>
    <StyledHeaderSearcher>
      <div className="wrapper"></div>
    </StyledHeaderSearcher>
    <SearcherBodyOverlay />
  </>
);

export default HeaderSearcher;
