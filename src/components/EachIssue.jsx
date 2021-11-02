import React from "react";
import Grid from "../elements/Grid";
import theme from "../styles/theme";
import displayedAt from "../shared/displayedAt";

const EachIssue = (props) => {
  const { issue_url, repository, description, created_at, repository_url } =
    props;

  const moveToRepo = () => {
    window.open(repository_url);
  };

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
        _onClick={moveToRepo}
        is_flex={{
          direction: "column",
          just_con: "center",
          align_item: "flex-start",
        }}
        margin="10px 0 0 0"
        font_size="20px"
        color={theme.color.blue}
        hover
        hover_color={theme.color.gray}
        hover_bg={theme.color.bg}
      >
        {repository}
      </Grid>
      <Grid
        _onClick={moveToDetail}
        is_flex={{
          direction: "column",
          just_con: "center",
          align_item: "flex-start",
        }}
        margin="10px 0 10px 0"
        font_size="20px"
        hover
        hover_color={theme.color.white}
        hover_bg={theme.color.bg}
      >
        {description}
      </Grid>
      <Grid
        is_flex={{
          direction: "column",
          just_con: "center",
          align_item: "flex-start",
        }}
        margin="0 0 10px 0"
        font_size="20px"
        color={theme.color.white}
      >
        {displayedAt(created_at)}
      </Grid>
    </Grid>
  );
};

export default EachIssue;
