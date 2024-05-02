import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { Dot, Pipe } from "./utilities.style";
import { TrailerPreview } from "../Components/TrailerPreview";
import { Moviecontainer, Recommend, PreviewContent } from "./MovieList.style";
import {
  SubscribeText,
  MovieDetails,
  Watchlist,
  Subscribe,
  ScrollDiv,
  RightDiv,
  MuteButton,
  AboutMovie,
  Description,
} from "./MovieList.style";
import MovieCarousel from "./MovieCarousel";

const MovieList = ({data,horror}) => {
  const dataArray = Array.isArray(data) ? data : Object.values(data);
  const horrorArray = Array.isArray(horror) ? horror : Object.values(horror);

  return (
    <ScrollDiv>
      <TrailerPreview />
      <PreviewContent>
        <MovieDetails>
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/3196/1711957213196-t"
            alt="shaddai"
          />
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

          <Subscribe>
            <SubscribeText>
              <span>
                {" "}
                <FontAwesomeIcon icon={faPlay} style={{ color: "#ffffff" }} />
                &nbsp;&nbsp;Subscribe To Watch
              </span>
            </SubscribeText>
            <Watchlist>
              <span>
                <FontAwesomeIcon icon={faPlus} style={{ color: "#ffffff" }} />
              </span>
            </Watchlist>
          </Subscribe>
        </MovieDetails>

        <RightDiv>
          <MuteButton>
            <img src="/images/mute-icon.svg" alt="mute" />
          </MuteButton>
        </RightDiv>
      </PreviewContent>
      <Moviecontainer>
        <Recommend>
          <h4>Latest Releases</h4>
          <MovieCarousel movies={dataArray} />
        </Recommend>
        <Recommend>
          <h4>Horror</h4>
          <MovieCarousel movies={horrorArray} />
        </Recommend>
      </Moviecontainer>
    </ScrollDiv>
  );
};

export default MovieList;
