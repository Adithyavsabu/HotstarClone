import styled from "styled-components";

export const ModalContainer = styled.div`
  height: 70%;
  width: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #040714;
  padding: 50px;
  z-index: 1000;

  button {
    cursor: pointer;
    background-color: transparent;
    outline: none;
    border: none;
    display: flex;
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;
