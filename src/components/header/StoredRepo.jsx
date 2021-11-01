import React from "react";
import Grid from "../../elements/Grid";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import theme from "../../styles/theme";
import Repo from "../Repo";

const StoredRepo = (props) => {
  const { repos, setRepos } = props;

  const hadleClickRepos = () => {
    setRepos((prev) => !prev);
  };

  return (
    <Grid>
      <Grid
        _onClick={hadleClickRepos}
        hover
        bg={theme.color.grayBlack1}
        hover_color={theme.color.white}
        hover_bg={theme.color.grayBlack2}
        is_flex={{ just_con: "flex-start", align_item: "center" }}
      >
        {repos ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
      </Grid>
      {repos && <Repo />}
    </Grid>
  );
};

export default StoredRepo;
