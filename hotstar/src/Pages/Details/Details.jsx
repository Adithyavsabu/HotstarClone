import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovie } from "../../api/getMovies";

const Detail = (props) => {
  const { id } = useParams();
  const { genre } = useParams();
  const [detailData, setDetailData] = useState({});
  console.log("id, genre", id, genre);
  useEffect(() => {
    // Fetch movie details based on the ID
    // Example fetch call:
    getMovie(id, genre).then((result) => setDetailData(result))
    .catch((error)=>{alert("Error fetching data",error)});
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

const Container = styled.div`
  position: relative;

  height: 100vh;
  overflow-x: hidden;
  overflow: hidden;
  display: flex;


  background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
`;

const MovieDetails = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  height: 488px;
  top: 200px;
  margin-bottom: 40px;
  padding-left: 90px;
  padding-top: 50px;
  width: 1535.2px;
  z-index: 2;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  height: 388px;
  margin-left: 4px;
  max-width: 480px;
  min-width: 480px;
  width: 480px;
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.8;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;

  min-height: 56px;
  margin-left: 15px;
`;

const Player = styled.button`
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  width: 392px;
  height: 56px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background: rgb (249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;

    img {
      width: 25px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  width: 66px;
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
