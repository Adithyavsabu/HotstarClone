import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPlay,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { Dot } from "../Utils.style/utilities.style";
import {
  Content,
  Wrap,
  ContentContainer,
  NextArrow,
  PrevArrow,
  MovieOverlay,
  WatchNowButton,
  Watchlist,
  Subscribe,
  Overlay,
  Description,
  AboutMovie,
} from "./MovieCarousel.style";

const MovieCarousel = ({ movies, genre }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNextClick = () => {
    const newIndex = startIndex + 7;
    setStartIndex(newIndex >= movies.length ? 0 : newIndex);
  };

  const handlePrevClick = () => {
    const newIndex = startIndex - 7;
    setStartIndex(newIndex < 0 ? movies.length - 7 : newIndex);
  };

  return (
    <>
      <ContentContainer>
        <Content>
          {movies.slice(startIndex, startIndex + 8).map((movie, index) => (
            <Wrap key={index}>
              <img src={movie.posterURL} alt="" />

              {index === 0 && (
                <PrevArrow className="prev-arrow" onClick={handlePrevClick}>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    size="lg"
                    style={{ color: "#ffffff" }}
                  />
                </PrevArrow>
              )}
              {index === 7 && (
                <NextArrow className="next-arrow" onClick={handleNextClick}>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    size="lg"
                    style={{ color: "#ffffff" }}
                  />
                </NextArrow>
              )}
              <MovieOverlay>
                <Overlay>
                  <img src={movie.posterURL} alt="overlayimage" />
                  <Subscribe>
                    <Link
                      to={`http://localhost:3000/details/${genre}/${movie.id}`}
                    >
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
                    <span>2h 30m</span> <Dot />
                    <span> 1 Season</span>
                  </AboutMovie>
                  <Description>
                    <p>
                      Three teenagers reaches Bangalore for their engineering
                      degree and gets involved in a fight with seniors. .
                    </p>
                  </Description>
                </Overlay>
              </MovieOverlay>
            </Wrap>
          ))}
        </Content>
      </ContentContainer>
    </>
  );
};

export default MovieCarousel;
