import React from "react";
import { Moviecontainer, Recommend } from "./MovieList.style";
import MovieCarousel from "../MovieCarousel/MovieCarousel";
import ImgSlider from "../MovieCarousel/ImgSlider";
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
        <h4>Latest Releases</h4>
        <MovieCarousel movies={familyMoviesArray} genre="family" />
      </Recommend>
      <Recommend>
        <h4>Horror</h4>
        <MovieCarousel movies={horrorArrayArray} genre="horror" />
      </Recommend>
      <Studios />
  
      <ImgSlider movies={familyMoviesArray} />
      <Footer/>
    </Moviecontainer>
  );
};

export default MovieList;