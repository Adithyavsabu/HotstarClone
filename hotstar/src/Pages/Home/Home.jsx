import React from "react";
import { useState, useEffect } from "react";
import { TrailerPreview } from "../../Components/TrailerPreview/TrailerPreview";
import { PreviewDetails } from "../../Components/PreviewDetails/PreviewDetails";
import MovieList from "../../Components/MovieList/MovieList";
import { Container, ScrollDiv } from "./Home.style";
import { getMovies } from "../../api/getMovies";

const Home = () => {
  const [familyGenre, setFamily] = useState([]);
  const [horrorGenre, setHorror] = useState([]);
  const [mysteryGenre, setMystery] = useState([]);
  const [dramaGenre, setDrama] = useState([]);

  useEffect(() => {
    getMovies("family").then((result) => setFamily(result));
    getMovies("horror").then((result) => setHorror(result));
    getMovies("mystery").then((result) => setMystery(result));
    getMovies("drama").then((result) => setDrama(result));
  }, []);


  return (
    
    <ScrollDiv>
      <TrailerPreview />
      <PreviewDetails />
      <MovieList
        familyGenre={familyGenre}
        horrorGenre={horrorGenre}
        mysteryGenre={mysteryGenre}
        dramaGenre={dramaGenre}
      />
    </ScrollDiv>
  );
};

export default Home;
