import { styled } from "styled-components";

export const ScrollDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
`;

export const PreviewContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 500px;

  justify-content: space-between;
  width: 1100px;
  z-index: 1;
  padding-left: 100px;
`;

export const MovieDetails = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 450px;

  justify-content: flex-end;

  img {
    box-sizing: border-box;
    display: block;
    height: 150px;
    max-height: 250px;
    max-width: 100%;
    overflow-x: clip;
    overflow-y: clip;
    width: 250px;
  }

  p {
    display: -webkit-box;
    height: 72px;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 416x;
    padding-top: 16px;
  }
`;

export const AboutMovie = styled.div`
  box-sizing: border-box;
  display: block;
  height: 28px;
  padding-top: 24px;
  width: 416px;
`;

export const Subscribe = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  height: 92px;
  justify-content: space-between;
  padding-top: 40px;
  width: 416px;
`;

export const SubscribeText = styled.button`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-grow: 1;
  height: 52px;
  //min-width :min-content;
  width: 338px;
  background-color: rgba(255, 255, 255, 0.2);
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
    font-size: 16px;
    line-height: 28px;
    height: 52px;
    width: 348px;
    padding: 12px 16px;
    color: #f9f9f9;
  }
`;

export const Watchlist = styled.button`
  margin-left: 16px;
  position: relative;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: 52px;
  justify-content: center;

  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 14px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 14px;
  width: 52px;
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const RightDiv = styled.div`
  height: 500px;
  width: 450px;
  display: flex;
  flex-direction: column;
  column-gap: 32px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const MuteButton = styled.div``;

export const Moviecontainer = styled.div`
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  top: 10vh;
  background-image: linear-gradient(
    360deg,
    #000000 70%,
    rgba(136, 136, 136, 0.01) 100%
  );
`;
export const Recommend = styled.div``;
