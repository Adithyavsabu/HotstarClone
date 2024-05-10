import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../../api/getMovies";
import {
  Container,
  Background,
  MovieDetails,
  Details,
  ImageTitle,
  ContentMeta,
  Controls,
  Player,
  Trailer,
  SubTitle,
  Description,
} from "./Details.Style";

const Detail = (props) => {
  const { id } = useParams();
  const { genre } = useParams();
  const [detailData, setDetailData] = useState({});
  console.log("id, genre", id, genre);
  useEffect(() => {
    // Fetch movie details based on the ID
    // Example fetch call:
    getMovie(id, genre)
      .then((result) => setDetailData(result))
      .catch((error) => {
        alert("Error fetching data", error);
      });
    //fetch(`https://api.sampleapis.com/movies/${genre}/${id}`);
  }, [id, genre]);

  return (
    <Container>
      <Background>
        <img alt={detailData.title} src={detailData.posterURL} />
      </Background>
      <MovieDetails>
        <Details>
          <ImageTitle>
            <img alt="no pic" src={detailData.titleImg} />
          </ImageTitle>
          <ContentMeta>
            <Controls>
              <Player>
                <img src="/images/play-icon-black.png" alt="" />
                <span>SUBSCRIBE TO WATCH</span>
              </Player>
              <Trailer>
                <span>+</span>
              </Trailer>
            </Controls>
            <SubTitle>{detailData.subTitle}</SubTitle>
            <Description>{detailData.description}</Description>
          </ContentMeta>
        </Details>
      </MovieDetails>
    </Container>
  );
};

export default Detail;
