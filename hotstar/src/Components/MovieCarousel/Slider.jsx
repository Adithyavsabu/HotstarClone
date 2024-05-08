import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
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
  Details,
} from "./Slider.Style";

import {
  Container,
  Heading,
  Carousel,
  MovieDetails,
  Wrap,
} from "./Slider.Style";
const ImgSlider = ({ movies, genre }) => {
  let settings = {
    infinite: false,
    speed: 500,
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
        <h2>{genre} </h2>
      </Heading>
      <Carousel {...settings}>
        {movies.map((movie, index) => (
          <Wrap key={index}>
            <img src={movie.posterURL} alt="" />

            <MovieDetails>
              <img src={movie.posterURL} alt="" />
              <Details>
              <Subscribe>
                <Link to={`http://localhost:3000/details/${genre}/${movie.id}`}>
                  <WatchNowButton>
                    <span>
                      {" "}
                      <FontAwesomeIcon
                        icon={faPlay}
                        style={{ color: "black" }}
                      />
                      &nbsp;&nbsp;Watch Now
                    </span>
                  </WatchNowButton>
                </Link>
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
                <span>
                <span>2h 30m</span> <Dot />
                <span> 1 Season</span></span>
              </AboutMovie>
              <Description>
                <p>
                  Three teenagers reaches Bangalore for their engineering degree
                  and gets involved in a fight with seniors.
                </p>
              </Description>
              </Details>
            </MovieDetails>
         
          </Wrap>
        ))}
      </Carousel>
    </Container>
  );
};

export default ImgSlider;
