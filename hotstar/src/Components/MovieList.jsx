import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/swiper.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Moviecontainer,
  Content,
  Recommend,
  PreviewContent,
} from "./MovieList.style";
import {
  SubscribeText,
  MovieDetails,
  Watchlist,
  Subscribe,
  ScrollDiv,
  RightDiv,
  MuteButton,
  AboutMovie,
  Wrap,
} from "./MovieList.style";

const MovieList = () => {
  return (
    <ScrollDiv>
      <PreviewContent>
        <MovieDetails>
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/3196/1711957213196-t"
            alt="shaddai"
          />
          <AboutMovie>
            <span>2h 30m</span> <span> 1 Season</span>
            <span> 7 language </span>
          </AboutMovie>
          <p>
            Three teenagers reaches Bangalore for their engineering degree and
            gets involved in a fight with seniors.{" "}
          </p>

          <AboutMovie>
            <span>Drama</span> <span>Controversial</span>
          </AboutMovie>

          <Subscribe>
            <SubscribeText>
              <span>Subscribe To Watch</span>
            </SubscribeText>
            <Watchlist>
              <span>+</span>
            </Watchlist>
          </Subscribe>
        </MovieDetails>

        <RightDiv>
          <MuteButton>MUTE</MuteButton>
        </RightDiv>
      </PreviewContent>
      <Moviecontainer>
        <Recommend>
          <h4>Latest Releases</h4>
          <Content>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
          </Content>
        </Recommend>

        <Recommend>
          <h4>Latest Releases</h4>
          <Content>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
          </Content>
        </Recommend>

        <Recommend>
          <h4>Latest Releases</h4>
          <Content>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
            <Wrap>
              <Link>
                <img src="/images/Movie.jpeg" alt="moviecard" />
              </Link>
            </Wrap>
          </Content>
        </Recommend>
      </Moviecontainer>
    </ScrollDiv>
  );
};

export default MovieList;
