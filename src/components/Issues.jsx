import React, { useEffect, useState } from "react";
import Grid from "../elements/Grid";
import theme from "../styles/theme";

import Pagination from "react-js-pagination";
import EachIssue from "./EachIssue";
import { useDispatch, useSelector } from "react-redux";
import testLogger from "../shared/testLogger";
import { getIssuesFromGithub } from "../redux/modules/repo";
import { useParams } from "react-router";

const Issues = () => {
  const pageNum = useParams().page_num;
  const totalNum = useSelector((state) => state.repo.paging.total);
  const issueArr = useSelector((state) => state.repo.issues);
  const dispatch = useDispatch();

  const [page, setPage] = useState(pageNum);

  const handlePageChange = (page) => {
    setPage(page);
    dispatch(getIssuesFromGithub(page));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(getIssuesFromGithub(page));
  }, [page]);

  return (
    <Grid margin="200px 0 10px 0 " width={theme.size.mainWidth}>
      <Grid bold font_size="20px">
        등록한 Repository Issue 모아보기
      </Grid>
      {issueArr?.map((each, index) => {
        return (
          <EachIssue
            key={index}
            repository={each.repository}
            description={each.description}
            created_at={each.created_at}
            issue_url={each.issue_url}
            repository_url={each.repository_url}
          />
        );
      }) ?? "검색결과가 없습니다."}
      <Pagination
        activePage={page}
        itemsCountPerPage={20}
        totalItemsCount={totalNum}
        pageRangeDisplayed={10}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </Grid>
  );
};

export default Issues;
