import { styled } from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  gap: 25px;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  align-items: flex-start;
  justify-content: space-between;
  transition: transform 0.5s ease;

  &:hover .next-arrow {
    display: flex;
    background: transparent;
  }
  .prev-arrow {
    display: flex;
    background: transparent;
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const Wrap = styled.div`
  padding-top: 246px;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  border: 1px solid rgba(249, 249, 249, 0.1);
  width: 185px; /* Set the width to match the desired width */
  margin-right: 5px; /* Add margin between each card */
  margin-bottom: 20px;

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;

    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export const NextArrow = styled.button`
  display: none; /* Hide arrow icon by default */
  position: absolute;
  top: 50%;
  padding-right: 5px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
`;

export const PrevArrow = styled.button`
  display: none;
  position: absolute;
  top: 50%;

  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
`;
