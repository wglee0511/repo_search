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

  //repos가 true일떄 저장해둔 것이 보이고 false일때는 닫음
  const hadleClickRepos = () => {
    setRepos((prev) => !prev);
  };

  return (
    <Grid>
      <Grid
        _onClick={hadleClickRepos}
        hover
        height="50px"
        bg={theme.color.grayBlack1}
        hover_color={theme.color.white}
        hover_bg={theme.color.grayBlack2}
        is_flex={{ just_con: "flex-start", align_item: "center" }}
        bold
        font_size="20px"
      >
        {repos ? (
          <ArrowDropDownIcon style={{ margin: "0 10px 0 10px" }} />
        ) : (
          <ArrowDropUpIcon style={{ margin: "0 10px 0 10px" }} />
        )}
        {` ${storedRepo?.length}개가 저장되어 있습니다.` ??
          "등록된 Repository가 존재하지 않습니다."}
      </Grid>
      {repos &&
        storedRepo.map((each, index) => {
          return <Repo key={index} {...each} />;
        })}
    </Grid>
  );
};

export default StoredRepo;
