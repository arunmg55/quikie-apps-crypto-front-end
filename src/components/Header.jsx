import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "theme";
import Flex from "components/Flex";
import QuikieAppsLogo from "assets/QuikieAppsLogo.png";

const AppHeader = styled(Flex)`
  width: 100%;
  height: 3.19rem;
  background-color: ${COLORS.BLUE_1};
`;

const LogoContainer = styled.div`
  height: 2.27rem;
  width: 5.33rem;
  margin-left: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Header = () => {
  return (
    <AppHeader centerVertically as="header">
      <LogoContainer>
        <Link to="/">
          <Image src={QuikieAppsLogo} alt="company-logo" />
        </Link>
      </LogoContainer>
    </AppHeader>
  );
};

export default Header;
