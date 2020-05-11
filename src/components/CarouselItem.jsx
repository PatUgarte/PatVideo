import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { setFavorite, unsetFavorite } from "../actions";

import "../assets/styles/components/CarouselItem.scss";

import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import trashIcon from "../assets/static/trash-icon.png";

const CarouselItem = (props) => {

    const { id, cover, title, year, contentRating, duration, isFavorite } = props;
    const handleSetFavorite = () => {
        props.setFavorite({ id, cover, title, year, contentRating, duration, isFavorite });
    };
    const handleUnsetFavorite = (videoId) => {
        props.unsetFavorite(videoId);
    };

    return (
        <div className="carousel-item">
            <img
                className="carousel-item__image"
                src={cover}
                alt={title}
            />
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                        <img
                            src={playIcon}
                            alt="Play video"
                        />
                    </Link>
                    {
                        isFavorite ?
                            (
                                <img
                                    src={trashIcon}
                                    alt="Remove from favorites"
                                    onClick={() => handleUnsetFavorite(id)}
                                />
                            ) :
                            (
                                <img
                                    src={plusIcon}
                                    alt="Add to favorites"
                                    onClick={handleSetFavorite}
                                />
                            )
                    }
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
                    {`${year} | ${contentRating} | ${duration}m`}
                </p>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    setFavorite,
    unsetFavorite,
};

CarouselItem.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
};

export default connect(null, mapDispatchToProps)(CarouselItem);