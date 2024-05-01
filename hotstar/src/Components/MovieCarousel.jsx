import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  Content,
  Wrap,
  ContentContainer,
  NextArrow,
  PrevArrow,
} from "./MovieCarousel.style";

const MovieCarousel = ({ movies }) => {
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
            </Wrap>
          ))}
        </Content>
      </ContentContainer>
    </>
  );
};

export default MovieCarousel;
