import {react} from "react"
import {  useState, useEffect } from "react";
import { Container } from "./Home.style";
import { TrailerPreview } from "../../Components/TrailerPreview";
import MovieList from "../../Components/MovieList";

const Home = () => {
const[data,setData]=useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    fetch('https://api.sampleapis.com/movies/family',{
      method:'GET',
    })
    .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setData(result)
      })
  }

  return (
    <Container>
      <TrailerPreview />
      <MovieList data={data}/>
    </Container>
  );
};

export default Home;
