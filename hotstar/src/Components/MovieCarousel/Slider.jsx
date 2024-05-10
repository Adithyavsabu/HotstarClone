import React, { useState , useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";

import { Dot } from "../../common/styles";
import {
  WatchNowButton,
  Watchlist,
  Subscribe,
  Description,
  AboutMovie,
  Details,
  Container,
  Heading,
  Carousel,
  MovieDetails,
  Wrap,
  Favourite,
} from "./Slider.Style";
import FavouriteContext from "../../context/FavouriteContext";

const ImgSlider = ({ movies, genre, heading }) => {

  const {favouriteCount,setFavouriteCount} = useContext(FavouriteContext);
  const [favourites, setFavourites] = useState([]);

  const handleFavouriteList = (id) => {
    if (favourites.includes(id)) {
      setFavourites(favourites.filter((favourite) => favourite !== id));
      setFavouriteCount(favouriteCount - 1);
      console.log("removed 1", favourites);
    } else {
      setFavourites([...favourites, id]);
      setFavouriteCount(favouriteCount + 1);
      console.log("added 1", favourites);
    }
  };

  useEffect(() => {
    console.log("favourites", favourites); // to load the data when the site laods or it will result in asynchronous operations of data
  }, [favourites]);

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
        <h3>{heading} </h3>
      </Heading>
      <Carousel {...settings}>
        {movies.map((movie, index) => (
          <Wrap key={index}>
            <img src={movie.posterURL} alt="" />

            <MovieDetails>
              <img src={movie.posterURL} alt="" />
              <Details>
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
                  <Favourite onClick={() => handleFavouriteList(movie.id)}>
                    {favourites.includes(movie.id) ? (
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "yellow" }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#f9fafa" }}
                      />
                      // onClick={() => handleFavouriteList(movie.id)}
                      // style={{ color: favourites.includes(movie.id) ? "yellow" : "#f9fafa" }}
                    )}
                  </Favourite>
                </Subscribe>
                <AboutMovie>
                  <span>
                    <span>2h 30m</span> <Dot />
                    <span> 1 Season</span>
                  </span>
                </AboutMovie>
                <Description>
                  <p>
                    Three teenagers reaches Bangalore for their engineering
                    degree and gets involved in a fight with seniors.
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
