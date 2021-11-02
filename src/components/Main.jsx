import { Grid } from "@mui/material";
import React from "react";
import theme from "../styles/theme";

const Main = () => {
  return (
    <Grid margin="200px 0 10px 0 " width={theme.size.mainWidth}>
      <Grid bold font_size="30px">
        검색어를 입력해주세요
      </Grid>
    </Grid>
  );
};

export default Main;
