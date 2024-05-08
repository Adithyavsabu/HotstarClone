import React from "react";
import { Container, Wrap } from "./Studios.Style";

const Studios = (props) => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video
          src="/videos/1564674844-disney.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
        <video
          src="/videos/1564676714-pixar.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video
          src="/videos/1564676115-marvel.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video
          src="/videos/1608229455-star-wars.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <video
          src="/videos/1564676296-national-geographic.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-hotstar-specials.png" alt="" />
        <video
          src="/videos/1564672344-hotstar-specials.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </Wrap>
    </Container>
  );
};

export default Studios;