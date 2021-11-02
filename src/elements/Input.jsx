import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const Input = (props) => {
  const { _onChange, onSubmit, value, ...rest } = props;

  return (
    <InputComponents
      onChange={_onChange}
      onSubmit={onSubmit}
      value={value}
      {...rest}
    />
  );
};

Input.defaultProps = {
  placeholder: "Repository를 검색해 주세요.",
  _onChange: () => {},
  type: "text",
  value: "",
  _onSubmit: () => {},
  margin: "",
  width: "100%",
  border: false,
  color: theme.color.gray,
  borderRadius: false,
  height: "100%",
  bg: theme.color.grayBlack1,
  font_size: "25px",
  rows: 8,
  padding: "12px 4px",
};

const InputComponents = styled.input`
  font-size: ${(props) => props.font_size};
  color: ${(props) => props.color};
  :focus {
    outline: none;
  }
  ${(props) => props.bg && `background-color: ${props.bg};`}
  ${(props) => (props.margin ? `margin:${props.margin}` : "")};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.border ? `border:${props.border}` : "")};
  padding: ${(props) => props.padding};
  box-sizing: border-box;
  ${(props) => (props.height ? `height:${props.height}` : "")};
  ::placeholder {
    color: ${theme.typoGrey2};
  }
`;

export default Input;
