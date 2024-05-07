import React from "react";
import { Moviecontainer, Recommend } from "./MovieList.style";
import MovieCarousel from "../MovieCarousel/MovieCarousel";
import Slider from "../MovieCarousel/Slider";
import Studios from "../../Components/Studios/Studios";
import Footer from "../Footer/Footer";

const MovieList = ({ familyMovies, horrorMovies }) => {
  const familyMoviesArray = Array.isArray(familyMovies)
    ? familyMovies
    : Object.values(familyMovies);
  const horrorArrayArray = Array.isArray(horrorMovies)
    ? horrorMovies
    : Object.values(horrorMovies);

  return (
    <Moviecontainer>
      <Recommend>
        {/* <h4>Latest Releases</h4> */}
        <Slider movies={familyMoviesArray} genre="family" />
      </Recommend>
      <Recommend>
        {/* <h4>Horror</h4> */}
        <Slider movies={horrorArrayArray} genre="horror" />
      </Recommend>
      <Studios />
      {/* <h4>Popular in Movies</h4> */}
      <Slider movies={familyMoviesArray} genre="horror" />
      <Footer />
    </Moviecontainer>
  );
};

export default MovieList;
