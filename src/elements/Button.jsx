import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

// @ wong
// is_flex : {direction, just_con,align_item}
// 이외 설정은 css string 값을 기입할것

const Button = (props) => {
  const { _onClick, children, ...rest } = props;

  return (
    <ButtonEle {...rest} onClick={_onClick}>
      {children}
    </ButtonEle>
  );
};

Button.defaultProps = {
  children: null,
  bg: theme.color.grayBlack1,
  width: "100%",
  color: `${theme.color.gray}`,
  margin: "auto",
  height: "100%",
  _onClick: () => {},
  type: "button",
  hover_color: "white",
  border_radius: "0px",
  font_size: "14px",
  bold: false,
  is_flex: null,
  hover: false,
};

const ButtonEle = styled.button`
  border: none;
  font-size: ${(props) => props.font_size};
  font-weight: ${(props) => props.bold && 700};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.border_radius};
  transition: background-color 0.3s;
  ${(props) =>
    props.hover &&
    `
        :hover {
            cursor: pointer;
            color: ${props.hover_color};
            background-color : ${props.hover_bg};
        }

    `}
  color: ${(props) => props.color};
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

export default Button;
