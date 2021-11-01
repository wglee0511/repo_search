import React from "react";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import theme from "../styles/theme";

const Repo = (props) => {
  const { in_repo } = props;

  return (
    <Grid
      border={`1px solid ${theme.color.gray}`}
      bg={in_repo ? theme.color.bg : theme.color.grayBlack1}
      is_flex={{
        just_con: "center",
        align_item: "center",
      }}
    >
      <Grid
        bg={in_repo ? theme.color.bg : theme.color.grayBlack1}
        margin="0 0 0 15px"
        is_flex={{
          direction: "column",
          just_con: "center",
          align_item: "flex-start",
        }}
      >
        <Grid
          bg={in_repo ? theme.color.bg : theme.color.grayBlack1}
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
          bg={in_repo ? theme.color.bg : theme.color.grayBlack1}
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
        <Grid
          bg={in_repo ? theme.color.bg : theme.color.grayBlack1}
          is_flex={{
            direction: "column",
            just_con: "center",
            align_item: "flex-start",
          }}
          margin="0 0 10px 0"
          font_size="20px"
        >
          C++
        </Grid>
      </Grid>
      <Grid bg={in_repo ? theme.color.bg : theme.color.grayBlack1}>
        {in_repo && (
          <Button
            width="150px"
            bg={theme.color.blue}
            height="50px"
            border_radius="5px"
            font_size="17px"
            hover
            color={theme.color.grayBlack2}
            hover_color={theme.color.gray}
            hover_bg={theme.color.grayBlack2}
            bold
          >
            추가
          </Button>
        )}
        {!in_repo && (
          <Button
            width="150px"
            bg={theme.color.orange}
            height="50px"
            border_radius="5px"
            font_size="17px"
            hover
            hover_color={theme.color.gray}
            hover_bg={theme.color.grayBlack2}
            bold
          >
            삭제
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Repo;
