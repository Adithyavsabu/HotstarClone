import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay , faPlus} from '@fortawesome/free-solid-svg-icons';
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

const MovieList = (props) => {
  const { data } = props;
  const dataArray = Array.isArray(data) ? data : Object.values(data);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
              <span> <FontAwesomeIcon icon={faPlay} style={{color: "#ffffff",}}/>&nbsp;&nbsp;Subscribe To Watch</span>
            </SubscribeText>
            <Watchlist>
              <span><FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}} /></span>
            </Watchlist>
          </Subscribe>
        </MovieDetails>

        <RightDiv>
          <MuteButton><img src="/images/mute-icon.svg" alt="mute" /></MuteButton>
        </RightDiv>
      </PreviewContent>
      <Moviecontainer>
      <Recommend>
          <h4>Latest Releases</h4>
          
          <Slider {...settings}>
            {dataArray.map((data)=>
          
            <Wrap>
              <Link >
                <img src={data.posterURL} alt="moviecard" />
              </Link>
            </Wrap>
           
            )}
            </Slider>
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
