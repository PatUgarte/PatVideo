import React from "react";

import Header from "../Header";
import SearchBar from "../SearchBar";
import Categories from "../Categories";
import Carousel from "../Carousel";
import CarouselItem from "../CarouselItem";
import Footer from "../Footer";

import "../../assets/styles/App.scss";

const App = () => (
    <div>
        <Header />

        <SearchBar />

        <Categories title="Mi Lista">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Categories title="Tendencias">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Categories>
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        <Footer />
    </div>
);

export default App;