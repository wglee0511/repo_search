import Grid from "../elements/Grid";
import React from "react";
import theme from "../styles/theme";

const Main = () => {
  return (
    <Grid margin="230px 0 10px 0 " width={theme.size.mainWidth}>
      <Grid bold font_size="20px">
        검색어를 입력해주세요
      </Grid>
    </Grid>
  );
};

export default Main;
