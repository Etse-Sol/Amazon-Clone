import React from 'react'
import {Carousel} from "react-responsive-carousel"
import { img } from './image/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./carousel.module.css";

const CarouselEffect = () => {
  return (
    <div>
      <Carousel
        autoplay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        {img.map((imglink, i) => {
          return <img src={imglink} key={i} />;
        })}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  );
}

export default CarouselEffect
