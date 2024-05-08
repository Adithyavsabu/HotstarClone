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

export const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  height: 121px;
  width: 215px;

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
    transform: scale(1.1);
    z-index: 7;
  }
`;

