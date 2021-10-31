import React from "react";
import styled from "styled-components";
import { COLORS } from "theme";
import Flex from "components/Flex";

const Wrapper = styled.div`
  cursor: grabbing;
  background-color: ${COLORS.WHITE_04};
  border: 1px dashed ${COLORS.GRAY_01};
  width: 10.97rem;
  height: 6.19rem;
  padding: 1rem;
  margin: 1.5rem;
  text-align: center;
  transition: 0.3s all;
  opacity: ${({ isDragging }) => (isDragging ? "0.7" : "1")};
  &:hover {
    box-shadow: 0px 3px 10px ${COLORS.WHITE_06};
  }
`;

const ContentWrapper = styled(Flex)`
  opacity: ${({ isDragging }) => (isDragging ? "0" : "1")};
  transition: 0.2s all;
`;

const Text = styled.div`
  font-size: ${({ size }) => size || " 0.78rem"};
  margin: ${({ margin }) => margin || undefined};
`;

const LogoContainer = styled.div`
  height: 1.8rem;
  width: 1.8rem;
`;

const Logo = styled.img`
  height: 100%;
  width: 100%;
`;

const HeroCard = ({
  title = "",
  amount = "",
  image = "",
  onDragStart = undefined,
  onDrop = undefined,
  isDragging = false,
  onEndDrag = undefined,
  onDragOver = undefined,
}) => {
  return (
    <Wrapper
      draggable
      onDragStart={onDragStart}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnd={onEndDrag}
      isDragging={isDragging}
    >
      <ContentWrapper column isDragging={isDragging}>
        <Flex spaceBetween>
          <Text>{title}</Text>
          <LogoContainer>
            <Logo src={image} alt="company-logo" />
          </LogoContainer>
        </Flex>
        <Text size="1.5rem" margin="1rem 0">
          {amount}
        </Text>
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroCard;
