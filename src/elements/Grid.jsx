import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

// @ wong
// is_flex : {direction, just_con,align_item}
// 이외 설정은 css string 값을 기입할것

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
  bg: theme.color.bg,
  bold: false,
  color: theme.color.gray,
  hover: false,
  hover_color: theme.color.black,
  hover_bg: theme.color.white,
  font_size: "17px",
  border: "none",
  align_start: false,
};

const Wrapper = styled.div`
  ${(props) => props.bold && `font-weight : 700;`}
  border: ${(props) => props.border};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  font-size: ${(props) => props.font_size};
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
  ${(props) =>
    props.align_start
      ? `
     text-align: start;
    `
      : ``}
  transition: background-color 0.3s;
`;

export default Grid;
