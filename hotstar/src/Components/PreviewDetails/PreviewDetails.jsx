import React, { useContext, useEffect } from "react";
import { styled } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Dot, Pipe } from "../../common/styles";
import {
  PreviewContent,
  SubscribeText,
  MovieDetails,
  Watchlist,
  Subscribe,
  RightDiv,
  MuteButton,
  AboutMovie,
  Description,
} from "./PreviewDetails.style";
import { default as data } from "../../data/Preview";

import { PreviewContext } from "../../context/PreviewContext";

export const PreviewDetails = () => {
  const { PreviewMovie, setPreviewMovie } = useContext(PreviewContext);

  const handleImageClick = (movie) => {
    setPreviewMovie(movie);
  };

  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5.5,
    slidesToScroll: 5.5,
    autoplay: true,
    variableWidth: false,
    centerMode: false,
    arrows: true,
  };

  return (
    <PreviewContent>
      <MovieDetails>
        <img
          src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/3196/1711957213196-t"
          alt="shaddai"
        />
        <AboutMovie>
          <span>2h 30m</span> <Dot />
          <span> 1 Season</span>
        </AboutMovie>
        <Description>
          <p>
            Three teenagers reaches Bangalore for their engineering degree and
            gets involved in a fight with seniors. They find a local gangster
            named Ranga to help them take revenge.{" "}
          </p>
        </Description>
        <AboutMovie>
          <span>Drama</span> &nbsp; <Pipe /> &nbsp; <span>Controversial</span>
        </AboutMovie>

        <Subscribe>
          <SubscribeText>
            <span>
              {" "}
              <FontAwesomeIcon icon={faPlay} style={{ color: "#ffffff" }} />
              &nbsp;&nbsp;Subscribe To Watch
            </span>
          </SubscribeText>
          <Watchlist>
            <span>
              <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
            </span>
          </Watchlist>
        </Subscribe>
      </MovieDetails>

      <RightDiv>
        <MuteButton>
          <img src="/images/mute-icon.svg" alt="mute" />
        </MuteButton>
        <Container>
          <Carousel {...settings}>
            {data.map((movie) => (
              <Wrap key={movie.id}>
                <a onClick={() => handleImageClick(movie)}>
                  <img src={movie.thumbnail} alt="" />
                </a>
              </Wrap>
            ))}
          </Carousel>
        </Container>
      </RightDiv>
    </PreviewContent>
  );
};

const Container = styled.div`
  overflow: hidden;
  display: flex;
`;

const Carousel = styled(Slider)`
  display: block;
  padding-top: 10px;
  overflow: hidden;
  z-index: 2;
  height: 58px;
  width: 400px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 8px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    width: 100%;

    overflow: hidden;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }

  .slick-next,
  .slick-prev {
    height: 100%;
    width: 150px;
    z-index: 2;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;

  height: 52px;
  width: 40px;
  a {
    cursor: pointer;
    display: block;

    padding: 5px;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      padding: 0;
      border: 4px;
      transition-duration: 300ms;
      transform: scale(1.1);
      z-index: 7;

      img {
        z-index: 7;
        object-fit: cover;
        padding: 0;
      }
    }
  }
`;
