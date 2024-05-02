import React from "react";
import { useState, useEffect } from "react";
import { Container } from "./Home.style";

import MovieList from "../../Components/MovieList";

const Home = () => {
  const [data, setData] = useState([]);
  const[horror,setHorror]=useState([]);

  useEffect(() => {
    getData();
    getHorror();
  }, []);

  const getData = () => {
    fetch("https://api.sampleapis.com/movies/family", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  };

  const getHorror = () => {
    fetch("https://api.sampleapis.com/movies/horror", {
      method: "GET",
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setHorror(result);
    
    })
    .catch(error=>console.error("error",error));
};


  return (
    <Container>
      <MovieList data={data} horror={horror} />
    </Container>
  );
};

export default Home;
