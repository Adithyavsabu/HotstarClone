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
    infinite: false,
    speed:500,
    slidesToShow: 7.3,
    slidesToScroll: 7,
    autoplay: false,
    variableWidth: false,
    centerMode: false,
    arrows: true,
  };
  return (
    <Container>
      <Heading>
        <h3>Popular in movies </h3>
      </Heading>
      <Carousel {...settings}>
        {movies.map((movie, index) => (
          <Wrap key={index}>
            <a>
              <img src={movie.posterURL} alt="" />
            </a>
            {/* <MovieOverlay>
            <Overlay>
              <img src={movie.posterURL} alt="overlayimage" />
             
            </Overlay>

          </MovieOverlay> */}
            <MovieDetails>
              <h3>TITLE HERE</h3>
          
            </MovieDetails>
          </Wrap>
        ))}
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1150px;
  height: 300px;
  z-index: 5;
`;
const Heading = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  z-index: 1;
`;

const Carousel = styled(Slider)`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;

  overflow: hidden;

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
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    width: 100%;

    position: relative;
  

    overflow: visible;
    z-index: 5;
   
  }

  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 0;
  }

  .slick-next,
  .slick-prev {
    height: 100%;
    width: 150px;
    z-index: 2;
  }

  .slick-arrow {
  color: white;
  z-index :10;
  /* other styles */
}

  .slick-prev,
  .slick-prev:hover{
    left: 0;
    background-image: linear-gradient(to right, #000, rgba(255, 255, 255, 0));
  }
  .slick-next,
  .slick-next:hover {
    right: 0;
    background-image: linear-gradient(to left, #000, rgba(255, 255, 255, 0));
  }
  .slick-next.slick-disabled:before,
  .slick-prev.slick-disabled:before {
    display: none;
  }

  /* .slick-arrow {
    background-color: transparent;
  } */
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
  z-index: 7;

  h3 {
    margin: 0;
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  height: 210px;
  width: 152px;
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
     //background-image: linear-gradient(to top, #000, rgba(22,24,31 0.03));
     //background-color: rgb(22,24,31);
      transition-duration: 300ms;
      
      transform: scale(1.7);
      z-index: 5;
      ${MovieDetails} {
        opacity: 1;
      }
      /* img {
        z-index: 2;
        height: 40%;
        width: 100%;
        object-fit: cover;
      } */
    }
  }
`;

export default ImgSlider;
