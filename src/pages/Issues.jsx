import React, { useEffect, useState } from "react";
import Grid from "../elements/Grid";
import theme from "../styles/theme";
import Pagination from "react-js-pagination";
import EachIssue from "../components/EachIssue";
import { useDispatch, useSelector } from "react-redux";
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
    <Grid margin="230px 0 10px 0 " width={theme.size.mainWidth}>
      {issueArr.length !== 0 ? (
        <>
          <Grid bold font_size="20px" margin="0 0 30px 0">
            검색결과 : 총 {totalNum}개
          </Grid>
          <Grid bold font_size="20px" margin="0 0 30px 0">
            Repository를 클릭시 해당 Repository로 설명을 클릭시 해당 Issue
            페이지로 이동합니다.
          </Grid>
        </>
      ) : (
        <Grid bold font_size="20px" margin="0 0 30px 0">
          Repository를 검색하여 추가해주세요.
        </Grid>
      )}
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
      {issueArr.length !== 0 && (
        <Pagination
          activePage={page}
          itemsCountPerPage={20}
          totalItemsCount={totalNum}
          pageRangeDisplayed={10}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      )}
    </Grid>
  );
};

export default Issues;
