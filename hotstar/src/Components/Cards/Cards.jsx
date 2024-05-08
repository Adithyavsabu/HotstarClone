import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Heading,
  Carousel,

  Wrap,
} from "./Cards.Style";
const Cards = ({data,heading}) => {
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5.3,
    slidesToScroll: 5,
    autoplay: false,
    variableWidth: false,
    centerMode: false,
    arrows: true,
  };
  return (
    <Container>
      <Heading><h3>{heading}</h3></Heading>
      <Carousel {...settings}>
        {data.map((data, index) => (
          <Wrap key={index}>
            <img src={data.imagepath} alt="" />
          </Wrap>
        ))}
      </Carousel>
    </Container>
  );
};

export default Cards;
