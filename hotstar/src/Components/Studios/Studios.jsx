import styled from "styled-components";

const Studios = (props) => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video src="/videos/1564674844-disney.mp4" autoPlay loop playsInline />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
        <video src="/videos/1564676714-pixar.mp4" autoPlay loop playsInline />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video src="/videos/1564676115-marvel.mp4" autoPlay loop playsInline />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video
          src="/videos/1608229455-star-wars.mp4"
          autoPlay
          loop
          playsInline
        />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <video
          src="/videos/1564676296-national-geographic.mp4"
          autoPlay
          loop
          playsInline
        />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-hotstar-specials.png" alt="" />
        <video
          src="/videos/1564672344-hotstar-specials.mp4"
          autoPlay
          loop
          playsInline
        />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  z-index: 1;


`;

const Wrap = styled.div`
  height: 110px;
  width: 190px;
  z-index: 1;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgb(7, 5, 5);
  background-color: #414c5e;



  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.07);

    video {
      opacity: 1;
    }
  }
`;

export default Studios;
