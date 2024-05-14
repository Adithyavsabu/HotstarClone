import React from "react";
import { Moviecontainer, Recommend } from "./MovieList.style";
import Slider from "../MovieCarousel/Slider";
import Studios from "../Studios/Studios";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import { default as language } from "../../data/Language";
import { default as genre } from "../../data/Genre";
import { default as data } from "../../data/movies";
const MovieList = ({
  movies,
  familyGenre,
  horrorGenre,
  mysteryGenre,
  dramaGenre,
}) => {
  const familyMovies = Array.isArray(familyGenre)
    ? familyGenre
    : Object.values(familyGenre);
  const horrorMovies = Array.isArray(horrorGenre)
    ? horrorGenre
    : Object.values(horrorGenre);
  const mysteryMovies = Array.isArray(mysteryGenre)
    ? mysteryGenre
    : Object.values(mysteryGenre);
  const dramaMovies = Array.isArray(dramaGenre)
    ? dramaGenre
    : Object.values(dramaGenre);

  return (
    <>
      <Moviecontainer>
        <Recommend>
          {/* <h4>Latest Releases</h4> */}
          <Slider movies={familyMovies} genre="family" heading="Family" />
        </Recommend>
        <Recommend>
          {/* <h4>Horror</h4> */}
          <Slider movies={horrorMovies} genre="horror" heading="Horror" />
        </Recommend>
        <Studios />
        <Cards data={language} heading="Popular Languages" />
        <Cards data={genre} heading="Popular Genres" />
        {/* <h4>Popular in Movies</h4> */}
        <Recommend>
          <Slider movies={dramaMovies} genre="drama" heading="Drama" />
        </Recommend>
        <Recommend>
          <Slider movies={mysteryMovies} genre="mystery" heading="Mystery" />
        </Recommend>
      </Moviecontainer>

      <Footer />
    </>
  );
};

export default MovieList;
