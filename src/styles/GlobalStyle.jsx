import React from "react";
import styled from "styled-components";
import theme from "./theme";

const GlobalStyle = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  color: ${theme.color.gray};
  background-color: ${theme.color.bg};
`;

export default GlobalStyle;
