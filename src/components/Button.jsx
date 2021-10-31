import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "theme";

const defaultButton = ({ color, normal, margin, inverse }) => css`
  ${`background: ${inverse ? COLORS.GRAY_01 : color};
color:${inverse ? COLORS.TEXT_PRIMARY : COLORS.WHITE_01};
font-size:0.7rem;
padding:0.4rem 0.9rem;
border-radius: 6px;
outline:none;
cursor: pointer;
height: max-content;
transition: 0.3s all;
font-weight:${normal ? 400 : 500};
margin:${margin || "0 auto"} ;
&:hover {
  box-shadow: 1px 2px 6px #a19fa4;
  opacity: 0.85;
}`}
`;

const StyledButton = styled.button`
  border: none;
  ${defaultButton}
`;

const Anchor = styled(Link)`
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  ${defaultButton}
`;

const Button = ({
  onClick = undefined,
  children = "",
  type = "",
  color = COLORS.BLUE_02,
  normal = false,
  to = "/",
  margin = "",
  inverse = "",
}) => {
  return (
    <>
      {type === "link" ? (
        <Anchor to={to} color={color}>
          {children}
        </Anchor>
      ) : (
        <StyledButton
          onClick={onClick}
          color={color}
          normal={normal}
          margin={margin}
          inverse={inverse}
        >
          {children}
        </StyledButton>
      )}
    </>
  );
};

export default Button;
