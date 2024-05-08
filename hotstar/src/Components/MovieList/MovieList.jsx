import React from "react";
import { Moviecontainer, Recommend } from "./MovieList.style";

import Slider from "../MovieCarousel/Slider";
import Studios from "../../Components/Studios/Studios";
import Footer from "../Footer/Footer";

const MovieList = ({ familyGenre, horrorGenre , mysteryGenre , dramaGenre}) => {
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
        <Slider movies={familyMovies} genre="family" />
      </Recommend>
      <Recommend>
        {/* <h4>Horror</h4> */}
        <Slider movies={horrorMovies} genre="horror" />
        </Recommend>
      <Studios />
      {/* <h4>Popular in Movies</h4> */}
      <Recommend>
      <Slider movies={dramaMovies} genre="drama" />
      </Recommend>

      <Recommend>
      <Slider movies={mysteryMovies} genre="mystery" />
      </Recommend>
    </Moviecontainer>
    
     <Footer />
     </>
  );
};

export default MovieList;
