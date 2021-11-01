import Grid from "../elements/Grid";
import React, { useState } from "react";
import { withRouter } from "react-router";
import { history } from "../redux/configureStore";
import styled from "styled-components";
import theme from "../styles/theme";
import Logo from "./header/Logo";

const Header = () => {
  // true or false로 창크기 조절
  const [repos, setRepos] = useState(false);
  const url = history.location.pathname;

  return (
    <Wrapper>
      <Grid margin="10px 0 0 15px " width={theme.size.mainWidth}>
        <Logo url={url} setRepos={setRepos} repos={repos} />
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  top: 0;

  z-index: 2;
  width: 100%;
`;

export default withRouter(Header);
