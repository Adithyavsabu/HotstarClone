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
  AboutMovie,
  More,
} from "./Details.Style";
import { Dot, Pipe } from "../../common/styles";

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
          <h1>{detailData.title} </h1>
          {/* <ImageTitle>
            <img alt="no pic" src={detailData.titleImg} />
          </ImageTitle> */}
          <AboutMovie>
            <span>2h 30m</span> <Dot />
            <span> 1 Season</span>
          </AboutMovie>
          <Description>
            <p>
              Three teenagers reaches Bangalore for their engineering degree and
              gets involved in a fight with seniors. They find a local gangster
              named Ranga to help them take revenge.{" "}
            </p>
          </Description>
          <AboutMovie>
            <span>Drama</span> &nbsp; <Pipe /> &nbsp; <span>Controversial</span>
          </AboutMovie>
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
