import Grid from "../elements/Grid";
import React, { useState } from "react";
import { withRouter } from "react-router";
import { history } from "../redux/configureStore";
import styled from "styled-components";
import theme from "../styles/theme";
import Logo from "./header/Logo";
import Input from "../elements/Input";
import StoredRepo from "./header/StoredRepo";

const Header = () => {
  // true or false로 창크기 조절
  const [repos, setRepos] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const url = history.location.pathname;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/repository/${inputValue}/1`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleOnChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  return (
    <Wrapper>
      <Grid margin="10px 0 10px " width={theme.size.mainWidth}>
        <Logo
          url={url}
          setRepos={setRepos}
          repos={repos}
          inputValue={inputValue}
        />
        <form onSubmit={handleOnSubmit}>
          <Input
            width="800px"
            margin="10px 0 10px"
            value={inputValue}
            _onChange={handleOnChange}
          />
        </form>
        <StoredRepo repos={repos} setRepos={setRepos} />
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  z-index: 2;
  width: ${theme.size.mainWidth};
  border: 1px solid ${theme.color.gray};
  background-color: ${theme.color.bg};
`;

export default withRouter(Header);
