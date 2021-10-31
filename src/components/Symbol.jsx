import React from "react";
import styled from "styled-components";

const Wrapper = styled.span`
  display: inline-block;
  padding: 0.1rem 0.5rem;
  background: #e6e6f2;
  color: #4a4aff;
  border-radius: 0.5rem;
  font-size: 0.65rem;
`;

const Radio = styled.span`
  background: #4a4aff;
  border-radius: 50%;
  display: inline-block;
  height: 0.35rem;
  width: 0.35rem;
`;

const Symbol = ({ name = "" }) => (
  <Wrapper>
    <Radio />
    &nbsp;
    {name}
  </Wrapper>
);

export default Symbol;
