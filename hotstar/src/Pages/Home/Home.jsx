import React from "react";
import { useState, useEffect } from "react";
import { TrailerPreview } from "../../Components/TrailerPreview/TrailerPreview";
import { PreviewDetails } from "../../Components/PreviewDetails/PreviewDetails";
import MovieList from "../../Components/MovieList/MovieList";
import { Container, ScrollDiv } from "./Home.style";
import { getMovies } from "../../api/getMovies";
import { PreviewProvider } from "../../context/PreviewContext";

const Home = () => {
  const [familyGenre, setFamily] = useState([]);
  const [horrorGenre, setHorror] = useState([]);
  const [mysteryGenre, setMystery] = useState([]);
  const [dramaGenre, setDrama] = useState([]);

  useEffect(() => {
    // fetchMovies().then((result) => setMovies(result));
    getMovies("family").then((result) => setFamily(result));
    getMovies("horror").then((result) => setHorror(result));
    getMovies("mystery").then((result) => setMystery(result));
    getMovies("drama").then((result) => setDrama(result));
  }, []);

  return (
    <PreviewProvider>
      <ScrollDiv>
        <TrailerPreview />
        <PreviewDetails />
        <MovieList
          // movies={movies}
          familyGenre={familyGenre}
          horrorGenre={horrorGenre}
          mysteryGenre={mysteryGenre}
          dramaGenre={dramaGenre}
        />
      </ScrollDiv>
    </PreviewProvider>
  );
};

export default Home;
