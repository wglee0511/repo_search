import React from "react";
import Grid from "../../elements/Grid";
import "react-notifications/lib/notifications.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useSelector } from "react-redux";
import theme from "../../styles/theme";
import Repo from "../Repo";

const StoredRepo = (props) => {
  const { repos, setRepos } = props;
  const storedRepo = useSelector((state) => state.repo.localRepo);

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
        bold
        font_size="20px"
      >
        {repos ? (
          <ArrowDropDownIcon style={{ marginLeft: "10px" }} />
        ) : (
          <ArrowDropUpIcon style={{ marginLeft: "10px" }} />
        )}
        {storedRepo.length}
      </Grid>
      {repos &&
        storedRepo.map((each, index) => {
          return <Repo key={index} {...each} />;
        })}
    </Grid>
  );
};

export default StoredRepo;
