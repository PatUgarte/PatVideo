import React from "react";
import { connect } from "react-redux";

import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";

import "../assets/styles/App.scss";

const Home = ({ searchParams, searchResults, myList, trends, originals }) => {

    const lists = [searchResults, myList, trends, originals];
    const categories = ["Resultados de la búsqueda: ", "Mi Lista", "Tendencias", "Originales de PatVideo"];
    const options = { id: "ID", title: "TÍTULO", type: "GÉNERO", year: "AÑO" };

    const isItFavorite = (id) => (myList.find((movie) => movie.id === id));

    categories[0] += `${options[searchParams.searchBy]} = ${searchParams.query}`;

    return (
        <>
            <SearchBar />
            {
                categories.map((category, i) => (
                    lists[i].length > 0 && (
                        <Categories key={category} title={category}>
                            <Carousel>
                                {lists[i].map((item) => (
                                    <CarouselItem
                                        key={item.id}
                                        {...item}
                                        isFavorite={isItFavorite(item.id)}
                                    />
                                ))}
                            </Carousel>
                        </Categories>
                    )))
            }
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        searchParams: state.searchParams,
        searchResults: state.searchResults,
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
};

export default connect(mapStateToProps, null)(Home);