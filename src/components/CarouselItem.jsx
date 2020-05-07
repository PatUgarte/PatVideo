import React from "react";
import PropTypes from "prop-types";

import "../assets/styles/components/CarouselItem.scss";

import playIcon from "../assets/static/play-icon.png";
import heartIcon from "../assets/static/heart-icon.png";

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
    <div className="carousel-item">
        <img
            className="carousel-item__image"
            src={cover}
            alt={title}
        />
        <div className="carousel-item__details">
            <div>
                <img src={playIcon} alt="Play video" />
                <img src={heartIcon} alt="Add to favorites" />
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">
                {`${year} | ${contentRating} | ${duration}m`}
            </p>
        </div>
    </div>
);

CarouselItem.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
};

export default CarouselItem;