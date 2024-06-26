import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  height: 100vh;
  overflow-x: hidden;
  overflow: hidden;
  display: flex;

  background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
`;

export const MovieDetails = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 488px;
  top: 100px;
  margin-bottom: 40px;
  padding-left: 90px;

  width: 1535.2px;
  z-index: 2;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  height: 388px;
  margin-left: 4px;
  max-width: 480px;
  min-width: 480px;
  width: 480px;
`;

export const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

export const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

export const ContentMeta = styled.div`
  max-width: 874px;
`;

export const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;

  min-height: 56px;
`;

export const Player = styled.button`
  font-size: 15px;
  margin: 30px 22px 0px 0px;
  width: 392px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

export const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  width: 66px;
`;

export const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Description = styled.div`
  width: 416x;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  height: 92px;
  box-sizing: border-box;
  p {
    display: -webkit-box;
    height: 72px;
    overflow-x: hidden;
    overflow-y: hidden;
    width: 416x;
    line-height: 24px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.84);
    overflow-wrap: break-word;
  }
`;

export const AboutMovie = styled.div`
  box-sizing: border-box;
  display: block;
  height: 28px;
  padding-top: 24px;
  line-height: 24px;
  width: 416px;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: 600;
`;

export const More = styled.div`
  top: 100vh;
  display: flex;
  flex-direction: column;
`;
