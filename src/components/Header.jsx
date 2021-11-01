import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
import { history } from "../redux/configureStore";
const Header = () => {
  const url = history.location.pathname;

  return <Wrapper isHome={url === "/" ? true : false}>Header</Wrapper>;
};

const Wrapper = styled.nav`
  ${(props) =>
    props.isHome
      ? `
        
      `
      : `
      
      `}
`;

export default withRouter(Header);
