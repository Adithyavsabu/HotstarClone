import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPlay,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import { Dot } from "../Utils.style/utilities.style";
import {
  WatchNowButton,
  Watchlist,
  Subscribe,
  Description,
  AboutMovie,
} from "./MovieCarousel.style";
const ImgSlider = ({ movies }) => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: false,
  };
  return (
    <Carousel {...settings}>
      {movies.map((movie, index) => (
        <Wrap key={index}>
          <a>
            <img src={movie.posterURL} alt="" />
          </a>
          {/* <MovieOverlay>
            <Overlay>
              <img src={movie.posterURL} alt="overlayimage" />
              <Subscribe>
                <WatchNowButton>
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faPlay} style={{ color: "black" }} />
                    &nbsp;&nbsp;Watch Now
                  </span>
                </WatchNowButton>
                <Watchlist>
                  <span>
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ color: "#ffffff" }}
                    />
                  </span>
                </Watchlist>
              </Subscribe>
              <AboutMovie>
                <span>2h 30m</span> <Dot />
                <span> 1 Season</span>
              </AboutMovie>
              <Description>
                <p>
                  Three teenagers reaches Bangalore for their engineering degree
                  and gets involved in a fight with seniors. .
                </p>
              </Description>
            </Overlay>

          </MovieOverlay> */}
          <MovieDetails>
            <h3>TITLE HERE</h3>
            {/* Add more movie details here */}
          </MovieDetails>
        </Wrap>
      ))}
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;
  overflow: hidden;
  padding-bottom: 100px;
  z-index: 2;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 2;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const MovieDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 2;

  h3 {
    margin: 0;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  height: 246px;
  width: 184px;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
      transform: scale(1.4);
      z-index: 7;
      ${MovieDetails} {
        opacity: 1;
      }
      img {
        z-index: 7;
        height: 50%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`;

export default ImgSlider;
