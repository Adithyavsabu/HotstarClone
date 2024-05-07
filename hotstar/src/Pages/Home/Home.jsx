import React from "react";
import { useState, useEffect } from "react";
import { TrailerPreview } from "../../Components/TrailerPreview/TrailerPreview";
import { PreviewDetails } from "../../Components/PreviewDetails/PreviewDetails";
import MovieList from "../../Components/MovieList/MovieList";
import { Container, ScrollDiv } from "./Home.style";
import { getMovies } from "../../api/getMovies";


const Home = () => {
  const [familyMovies, setFamily] = useState([]);
  const [horrorMovies, setHorror] = useState([]);

  useEffect(() => {
    getMovies("family").then((result) => setFamily(result));
    getMovies("horror").then((result) => setHorror(result));
  }, []);

  // const getData = () => {
  //   fetch("https://api.sampleapis.com/movies/family", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       setData(result);
  //     });
  // };

  // const getHorror = () => {
  //   fetch("https://api.sampleapis.com/movies/horror", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       setHorror(result);
  //     })
  //     .catch((error) => console.error("error", error));
  // };

  return (

    <ScrollDiv>
      <TrailerPreview />
      <PreviewDetails />
      <MovieList familyMovies={familyMovies} horrorMovies={horrorMovies} />
   
    </ScrollDiv>
      
  );
};

export default Home;
