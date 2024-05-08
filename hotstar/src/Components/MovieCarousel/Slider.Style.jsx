import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
height: 100%;
  z-index: 5;
 
`;
export const Heading = styled.div`
  position: absolute;
  display: block;
  justify-content: flex-start;
  z-index: 1;
  h4 {
 
  }
`;

export const Carousel = styled(Slider)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;
padding-top: 10px;
  overflow: hidden;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    width: 100%;
    overflow: visible;
    z-index: 5;
  }

  .slick-slide {
    padding: 3px;

  }

  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: 0;
  }

  /* .slick-next,
  .slick-prev {
    height: 100%;
    width: 150px;
    z-index: 2;
  } */

  .slick-arrow {
    color: white;
    z-index: 10;
    /* other styles */
  }

  .slick-prev,
  .slick-prev:hover {
    left: 0;
    background-image: linear-gradient(to right, #000, rgba(255, 255, 255, 0));
  }
  .slick-next,
  .slick-next:hover {
    right: 0;
    background-image: linear-gradient(to left, #000, rgba(255, 255, 255, 0));
  }
  .slick-next.slick-disabled:before,
  .slick-prev.slick-disabled:before {
    display: none;
  }

  /* .slick-arrow {
    background-color: transparent;
  } */
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to top,
    rgba(22, 24, 31, 1) 0%,
    rgba(22, 24, 31, 1) 40%,
    rgba(22, 24, 31, 1) 45%,
    rgba(22, 24, 31, 1) 50%,
    rgba(22, 24, 31, 0.9) 40%,
    rgba(22, 24, 31, 0.9) 45%,
    rgba(22, 24, 31, 0.7) 48%,
    rgba(22, 24, 31, 0.5) 50%,
    rgba(22, 24, 31, 0.4) 50%,
    rgba(22, 24, 31, 0.3) 54%,
    rgba(22, 24, 31, 0.2) 62%
  );
  color: white;
  
  opacity: 0;
  background-color: rgb(22, 24, 31);
  transition: opacity 0.3s ease;
  z-index: 3;
  overflow: hidden;
  h3 {
    margin: 0;
  }
`;



export const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  height: 230px;
  width: 170px;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  &:hover {
    padding: 0;
    //background-image: linear-gradient(to top, #000, rgba(22,24,31 0.03));
    //background-color: rgb(22,24,31);
    transition-duration: 300ms;
    //  border: 4px solid white;
    transform: scale(1.5);
    z-index: 7;

    ${MovieDetails} {
      opacity: 1;
    }
    img {
      inset: 0px;
      display: block;
      height: 50%;
      width: 100%;
      object-fit: cover;
      position: absolute;
      z-index: 3;
    }
  }
`;

export const Details= styled.div`
display: flex;
flex-direction: column;
height: 50%;
width: 100%;
justify-content: flex-start;
align-items: flex-start;

`;


export const Subscribe = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  height: 35px;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 3;
  
`;

export const WatchNowButton = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
 min-width: min-content;
width: 140px;
  background-color: white;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  cursor: pointer;
  transition-duration: 0.3s;
  transition-property: transform, background-color;
  transition-timing-function: ease-in-out;

  span {
    box-sizing: border-box;
    display: block;
    font-weight: 500;
    font-size: 10px;
    text-align: center;
    color: black;
  }
`;

export const Watchlist = styled.button`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 30px;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 14px;
  padding-left: 14px;
  padding-right: 14px;
  padding-top: 14px;
  width: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  span {
    box-sizing: border-box;
    display: block;
    font-weight: 500;
    font-size: 10px;
    text-align: center;
  }
`;

export const AboutMovie = styled.div`
  box-sizing: border-box;
  display: flex;

  //padding-top: 8px;
  width: 100%;
  color: rgb(255, 255, 255);
  font-size: 10px;
  font-weight: 600;
`;

export const Description = styled.div`
  width: 216x;
 // padding-top: 4px;
  display: flex;
  //height: 52px;
  box-sizing: border-box;
  p {
    display: -webkit-box;
    
    overflow-x: hidden;
    overflow-y: hidden;
    width: 100%;
    font-size: 10px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.84);
  }
`;
