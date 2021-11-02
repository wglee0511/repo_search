import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "../../elements/Grid";
import theme from "../../styles/theme";
import { history } from "../../redux/configureStore";

const Logo = (props) => {
  const { url, setRepos, repos, inputValue } = props;
  // true 일때 home, search || false 일 때  issues
  const nowUrl = url.indexOf("issues") == -1 ? true : false;

  const hadleClickRepos = () => {
    setRepos((prev) => !prev);
  };

  const moveToHome = () => {
    history.push("/");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const moveToIssues = () => {
    history.push("/search/issues/1");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const moveToSearch = () => {
    history.push(`/search/repository/${inputValue}/1`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Grid
      height="50px"
      is_flex={{
        just_con: "center",
        align_item: "center",
      }}
    >
      <GitHubIcon style={{ marginLeft: "15px" }} fontSize="large" />
      <Grid
        color={nowUrl ? theme.color.white : theme.color.gray}
        is_flex={{
          just_con: "flex-start",
          align_item: "center",
        }}
        _onClick={moveToHome}
        hover_color={theme.color.white}
        hover_bg={theme.color.bg}
        margin="0 0 0 15px"
        font_size="30px"
        bold
        hover
      >
        Github Repository Search
      </Grid>
      <Grid
        _onClick={hadleClickRepos}
        color={repos ? theme.color.white : theme.color.gray}
        is_flex={{
          just_con: "center",
          align_item: "center",
        }}
        width="150px"
        hover
        hover_color={theme.color.white}
        hover_bg={theme.color.bg}
        bold
        cursor
      >
        Stored Repos
      </Grid>
      <Grid
        _onClick={moveToSearch}
        color={nowUrl ? theme.color.white : theme.color.gray}
        is_flex={{
          just_con: "center",
          align_item: "center",
        }}
        width="150px"
        hover
        hover_color={theme.color.white}
        hover_bg={theme.color.bg}
        bold
        cursor
      >
        Search
      </Grid>
      <Grid
        _onClick={moveToIssues}
        color={!nowUrl ? theme.color.white : theme.color.gray}
        is_flex={{
          just_con: "center",
          align_item: "center",
        }}
        width="150px"
        hover
        hover_color={theme.color.white}
        hover_bg={theme.color.bg}
        bold
        cursor
      >
        Issues
      </Grid>
    </Grid>
  );
};

export default Logo;
