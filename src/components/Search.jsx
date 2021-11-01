import React, { useEffect, useState } from "react";
import Grid from "../elements/Grid";
import Repo from "./Repo";
import theme from "../styles/theme";
import Pagination from "react-js-pagination";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getRepoFromGithub } from "../redux/modules/repo";

const Search = () => {
  const word = useParams().word;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepoFromGithub(word));
  }, []);

  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <Grid margin="200px 0 10px 0 " width={theme.size.mainWidth}>
      <Repo in_repo />
      <Repo in_repo />
      <Repo in_repo />
      <Repo in_repo />
      <Repo in_repo />
      <Repo in_repo />
      <Repo in_repo />
      <Repo in_repo />
      <Repo in_repo />
      <Repo in_repo />
      <Repo in_repo />
      <Repo in_repo />
      <Repo in_repo />
      <Repo in_repo />
      <Pagination
        activePage={page}
        itemsCountPerPage={30}
        totalItemsCount={450}
        pageRangeDisplayed={10}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
    </Grid>
  );
};

export default Search;
