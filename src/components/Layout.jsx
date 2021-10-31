import React from "react";
import styled from "styled-components";

import Header from "components/Header";
import DraggableCards from "components/DraggableCards";

const ComponentWrapper = styled.div`
  width: 85%;
  margin: 0 auto 3rem auto;
`;

const Layout = (Component) => (props) => {
  return (
    <>
      <Header />
      <DraggableCards />
      <ComponentWrapper>
        <Component {...props} />
      </ComponentWrapper>
    </>
  );
};

export default Layout;
