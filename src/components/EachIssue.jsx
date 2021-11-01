import React from "react";
import Grid from "../elements/Grid";
import { history } from "../redux/configureStore";
import theme from "../styles/theme";

const EachIssue = (props) => {
  const { issue_url } = props;

  const moveToDetail = () => {
    window.open(issue_url);
  };
  return (
    <Grid
      margin="0 0 0 15px"
      is_flex={{
        direction: "column",
        just_con: "center",
        align_item: "flex-start",
      }}
    >
      <Grid
        _onClick={moveToDetail}
        is_flex={{
          direction: "column",
          just_con: "center",
          align_item: "flex-start",
        }}
        margin="10px 0 0 0"
        font_size="20px"
        color={theme.color.blue}
        hover
        hover_color={theme.color.blue}
        hover_bg={theme.color.bg}
      >
        parkseulkee/tetris_game
      </Grid>
      <Grid
        is_flex={{
          direction: "column",
          just_con: "center",
          align_item: "flex-start",
        }}
        margin="10px 0 10px 0"
        font_size="20px"
      >
        테트리스
      </Grid>
    </Grid>
  );
};

export default EachIssue;
