import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const Grid = (props) => {
  const { children, _onClick, ...rest } = props;

  return (
    <Wrapper onClick={_onClick} {...rest}>
      {children}
    </Wrapper>
  );
};

Grid.defaultProps = {
  width: "100%",
  height: "100%",
  children: null,
  _onClick: () => {},
  is_flex: null,
  cursor: false,
  margin: "",
  padding: "",
  bg: theme.color.white,
  color: theme.color.black,
  hover: false,
  hover_color: theme.color.black,
  hover_bg: theme.color.white,
};

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  ${(props) =>
    props.hover &&
    `
        :hover {
            cursor: pointer;
            color: ${props.hover_color};
            background-color : ${props.hover_bg};
        }

    `}
  ${(props) => props.cursor && "cursor : pointer"};
  ${(props) => {
    if (props.is_flex !== null) {
      return `
                display: flex;
                flex-direction: ${props.is_flex.direction};
                justify-content : ${props.is_flex.just_con};
                align-items: ${props.is_flex.align_item};
            `;
    }
  }}
`;

export default Grid;
