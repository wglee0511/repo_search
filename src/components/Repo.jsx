import React from "react";
import Grid from "../elements/Grid";
import Button from "../elements/Button";
import theme from "../styles/theme";
import { NotificationManager } from "react-notifications";
import { useDispatch, useSelector } from "react-redux";
import {
  actionDeleteRepo,
  actionSetRepo,
  getIssuesFromGithub,
} from "../redux/modules/repo";

const Repo = (props) => {
  const { in_repo, repo_id, repository, description, language, html_url } =
    props;

  const dispatch = useDispatch();
  const storedRepo = useSelector((state) => state.repo.localRepo);

  const repoObj = {
    repository,
    description,
    language,
    html_url,
    repo_id,
  };

  const handleClickPlus = () => {
    if (storedRepo.length >= 4) {
      NotificationManager.warning(
        "Repository는 4개 이상 등록이 불가합니다.",
        "등록 개수 제한",
        3000
      );
      return;
    }
    NotificationManager.success(`${storedRepo.length + 1} 개`, "등록 성공");
    dispatch(actionSetRepo(repoObj));
  };

  const handleClickDelete = () => {
    NotificationManager.success("삭제 완료");
    dispatch(actionDeleteRepo(repoObj));
    dispatch(getIssuesFromGithub(1));
  };

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
          _onClick={() => window.open(html_url)}
          align_start
        >
          {repository}
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
          align_start
        >
          {description}
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
          color={theme.color.white}
        >
          {language}
        </Grid>
      </Grid>
      <Grid bg={in_repo ? theme.color.bg : theme.color.grayBlack1}>
        {in_repo && (
          <Button
            width="150px"
            bg={theme.color.green}
            height="50px"
            border_radius="5px"
            font_size="17px"
            hover
            color={theme.color.gray}
            hover_color={theme.color.gray}
            hover_bg={theme.color.grayBlack2}
            _onClick={handleClickPlus}
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
            _onClick={handleClickDelete}
          >
            삭제
          </Button>
        )}
      </Grid>
    </Grid>
  );
};

export default Repo;
