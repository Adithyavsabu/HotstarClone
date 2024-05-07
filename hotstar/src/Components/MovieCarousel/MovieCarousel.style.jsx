import { styled } from "styled-components";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  overflow: visible;
  align-items: flex-start;
  justify-content: space-between;
  transition: transform 0.5s ease;
  z-index: 1;

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

export const MovieOverlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:rgb(22, 24, 31);
  background-image: linear-gradient(
    360deg,
    rgb(22, 24, 31) 50%,
    rgb(22, 24, 31) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  opacity: 0;

  z-index: 2;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: black;
  z-index: 1;

  transition: 0.3s ease-in-out;
`;

export const Subscribe = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  height: 38px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 3;
`;

export const WatchNowButton = styled.button`
  margin-left: 3px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  //min-width :min-content;
  width: 120px;
  background-color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  cursor: pointer;
  transition-duration: 0.3s;
  transition-property: transform, background-color;
  transition-timing-function: ease-in-out;

  span {
    box-sizing: border-box;
    display: block;
    font-weight: 600;
    font-size: 10px;
    height: 40px;
    width: 148px;
    padding: 12px 16px;
    color: black;
    align-items: center;
  }
`;

export const Watchlist = styled.button`
  padding-right: 10px;
  align-items: center;
  box-sizing: border-box;
  display: flex;

  height: 30px;
  justify-content: center;

  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 14px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 14px;
  width: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Wrap = styled.div`
  height: 202px;
  width: 151px;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease-in-out;
  border: 1px solid rgba(249, 249, 249, 0.1);
  margin-right: 5px;

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
    transform: scale(1.6);
    z-index: 2;
    ${MovieOverlay} {
      opacity: 1;

      img {
        inset: 0px;
        display: block;
        height: 40%;
        width: 100%;
        object-fit: cover;
        position: relative;
      }
    }
   
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
  height: 100%;
  align-items: center;

`;

export const PrevArrow = styled.button`
  display: none;
  position: absolute;
  top: 50%;

  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
`;

export const AboutMovie = styled.div`
  box-sizing: border-box;
  display: block;
  height: 18px;
  padding-top: 12px;
  width: 216px;
  color: rgb(255, 255, 255);
  font-size: 10px;
  font-weight: 600;
`;

export const Description = styled.div`
  width: 216x;
  padding-top: 8px;
  display: flex;
  height: 52px;
  box-sizing: border-box;
  p {
    display: -webkit-box;
    height: 72px;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 216x;

    font-size: 10px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.84);
    overflow-wrap: break-word;

    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`;
