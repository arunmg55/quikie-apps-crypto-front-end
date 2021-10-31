import React from "react";
import styled from "styled-components";
import Button from "components/Button";

import Flex from "components/Flex";

const ModalWrapper = styled(Flex)`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #9f9f9f3d;
  justify-content: center;
  align-items: center;
  opacity: 1 !important;
  font-size: 0.8rem;
`;

const ContetWrapper = styled(Flex)`
  min-width: 15rem;
  height: 4.6rem;
  background: #fff;
  border-radius: 10px;
  padding: 1rem 1.3rem;
  opacity: 1 !important; ;
`;

const Text = styled.span`
  flex: 1;
`;

const Modal = ({ message = "Modal goes here", onClick = undefined }) => {
  return (
    <ModalWrapper>
      <ContetWrapper column>
        <Text>{message}</Text>
        <Flex end>
          <Button
            margin="0 2rem 0 0"
            inverse
            onClick={() => onClick && onClick(false)}
          >
            Cancel
          </Button>
          <Button margin="0" onClick={() => onClick && onClick(true)}>
            Ok
          </Button>
        </Flex>
      </ContetWrapper>
    </ModalWrapper>
  );
};

export default Modal;
