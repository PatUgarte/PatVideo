import React from "react";

import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

import useInitialState from "../hooks/useInitialState";

import "../assets/styles/App.scss";

const API = "http://localhost:3000/initialState";

const Home = () => {

    const [videos, categories] = useInitialState(API);

    return (
        <>
            <SearchBar />
            {categories.map((category) => (
                videos[category].length > 0 && (
                    <Categories key={category} title={category}>
                        <Carousel>
                            {videos[category].map((item) => (
                                <CarouselItem key={item.id} {...item} />
                            ))}
                        </Carousel>
                    </Categories>
                )))}
        </>
    );
};

export default Home;