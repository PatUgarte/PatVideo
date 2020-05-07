import React, { useState, useEffect } from "react";

import Header from "../Header";
import SearchBar from "../SearchBar";
import Categories from "../Categories";
import Carousel from "../Carousel";
import CarouselItem from "../CarouselItem";
import Footer from "../Footer";

import "../../assets/styles/App.scss";

const API = "http://localhost:3000/initialState";

const App = () => {
    const [videos, setVideos] = useState({ "mylist": [], "trends": [], "original": [] });

    useEffect(() => {
        fetch(API)
            .then((response) => response.json())
            .then((data) => setVideos(data));
    }, []);

    return (
        <div>
            <Header />
            <SearchBar />
            {(Object.keys(videos)).map((category, index) => (
                videos[category].length > 0 && (
                    <Categories title={category}>
                        <Carousel>
                            {videos[category].map((item) => (
                                <CarouselItem key={item.id} {...item} />
                            ))}
                        </Carousel>
                    </Categories>
                )))}
            <Footer />
        </div>
    );
};

export default App;