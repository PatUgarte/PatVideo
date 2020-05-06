import React from "react";
import "../assets/styles/components/CarouselItem.scss";

import playIcon from "../assets/static/play-icon.png";
import heartIcon from "../assets/static/heart-icon.png";

const CarouselItem = () => (
    <div className="carousel-item">
        <img
            className="carousel-item__image"
            src="https://images.pexels.com/photos/1694348/pexels-photo-1694348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
        />
        <div className="carousel-item__details">
            <div>
                <img src={playIcon} alt="Play video" />
                <img src={heartIcon} alt="Add to favorites" />
            </div>
            <p className="carousel-item__details--title">Título de prueba</p>
            <p className="carousel-item__details--subtitle">Subtítulo de prueba</p>
        </div>
    </div>
);

export default CarouselItem;