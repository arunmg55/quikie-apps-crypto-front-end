import React from "react";
import styled from "styled-components";

import Flex from "components/Flex";

import NotFound from "assets/NotFound.jpg";

const NotFoundWrapper = styled(Flex)`
  text-align: center;
  font-size: 0.8rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  width: 18rem;
`;

const NotFoundPage = () => {
  return (
    <NotFoundWrapper column centerVertically>
      <ImageWrapper>
        <Image src={NotFound} alt="404" loading="lazy" />
      </ImageWrapper>
      <div>
        <h3>Page Not found</h3>
        <a href="/">Go To Home</a>
      </div>
    </NotFoundWrapper>
  );
};
export default NotFoundPage;
