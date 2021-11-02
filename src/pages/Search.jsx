import React, { useEffect, useState } from "react";
import Grid from "../elements/Grid";
import Repo from "../components/Repo";
import theme from "../styles/theme";
import Pagination from "react-js-pagination";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getRepoFromGithub } from "../redux/modules/repo";
import { useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

const Search = () => {
  const word = useParams().word;
  const pageNum = useParams().page_num;
  const totalNum = useSelector((state) => state.repo.paging.total);
  const repoArr = useSelector((state) => state.repo.totalRepo);
  const dispatch = useDispatch();

  const [page, setPage] = useState(pageNum);

  const handlePageChange = (page) => {
    setPage(page);
    dispatch(getRepoFromGithub(word, page));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    dispatch(getRepoFromGithub(word, page));
  }, [word, page]);

  return (
    <Grid margin="230px 0 10px 0 " width={theme.size.mainWidth}>
      {repoArr.length !== 0 ? (
        <Grid bold font_size="20px" margin="0 0 30px 0">
          검색결과 : 총 {totalNum}개
        </Grid>
      ) : (
        <Grid bold font_size="20px" margin="0 0 30px 0">
          검색어를 입력해주세요
        </Grid>
      )}
      {repoArr.length !== 0
        ? repoArr?.map((each, index) => {
            return (
              <Repo
                in_repo
                key={index}
                repo_id={uuidv4()}
                repository={each.repository}
                description={each.description}
                language={each.language}
                html_url={each.html_url}
              />
            );
          })
        : "검색결과가 없습니다."}

      {repoArr.length !== 0 && (
        <Pagination
          activePage={page}
          itemsCountPerPage={30}
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

export default Search;
