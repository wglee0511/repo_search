import React, { useState } from "react";
import Grid from "../elements/Grid";
import theme from "../styles/theme";

import Pagination from "react-js-pagination";
import EachIssue from "./EachIssue";

const Issues = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Grid margin="200px 0 10px 0 " width={theme.size.mainWidth}>
      <EachIssue />
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

export default Issues;
