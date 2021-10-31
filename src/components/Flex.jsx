import styled, { css } from "styled-components";

const defaultStyle = ({
  centerVertically,
  spaceBetween,
  flexWrap,
  center,
  end,
  column,
}) => css`
  ${centerVertically && "align-items: center;"}
  ${spaceBetween && "justify-content: space-between;"}
  ${flexWrap && "flex-wrap: wrap;"}
  ${center && "justify-content: center;"}
  ${end && "justify-content: flex-end;"}
  ${column && "flex-direction: column;"}
`;

const Flex = styled.div`
  ${defaultStyle}
  display:flex;
`;

export default Flex;
