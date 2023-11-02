import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carouselStyles.scss";
import building1 from '../assets/images/buildings/building1.jpg';
import building2 from '../assets/images/buildings/building2.jpg';

export default () => (
    <Carousel autoPlay showArrows={true} className="carousel-container">
        <div>
            <img alt="" src={building1} />
        </div>
        <div>
            <img alt="" src={building2} />
        </div>
    </Carousel>
);
