import React, { useState } from "react";
import { connect } from "react-redux";

import { setSearchResult } from "../actions";

import "../assets/styles/components/SearchBar.scss";

const SearchBar = (props) => {

    const options = { id: "ID", title: "TÍTULO", type: "GÉNERO", year: "AÑO" };

    const keys = Object.keys(options);
    const values = Object.values(options);
    const searchOptions = keys.map((key, i) => (
        <option key={key} value={key}>{values[i]}</option>
    ));

    const [form, setValues] = useState({ searchBy: "", query: "" });

    const errorMessageElement = document.getElementsByClassName("search-bar__errorMessage");
    const fadeIn = () => {
        errorMessageElement.item(0).classList.replace("fadeOut", "fadeIn");
    };
    const fadeOut = () => {
        errorMessageElement.item(0).classList.replace("fadeIn", "fadeOut");
    };

    const handleFormChange = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const searchIsValid = (form.searchBy || form.query) && (form.query);
    const handleSearch = (event) => {
        event.preventDefault();
        props.setSearchResult({ searchBy: "id", query: "0" });
        if (searchIsValid) {
            props.setSearchResult(form);
        } else {
            fadeIn();
            setTimeout(fadeOut, 1500);
        }
    };

    return (
        <section className="search-bar">
            <h2 className="search-bar__title">¿Qué deseas ver hoy?</h2>
            <div className="search-bar__container">
                <form className="search-bar__form" onSubmit={handleSearch}>
                    <select
                        className="search-bar__select"
                        name="searchBy"
                        onChange={handleFormChange}
                    >
                        <option value="">Buscar por</option>
                        {searchOptions}
                    </select>
                    <input
                        className="input"
                        type="text"
                        name="query"
                        placeholder="Ingresa tu búsqueda..."
                        aria-label="Barra de búsqueda de videos"
                        onChange={handleFormChange}
                    />
                    <button
                        type="submit"
                        className="search-bar__button"
                        aria-label="Botón de búsqueda de videos"
                        onClick={fadeOut}
                    />
                </form>
                <p className="search-bar__errorMessage fadeOut">No hay resultados para esta búsqueda</p>
            </div>
        </section>
    );
};

const mapDispatchToProps = {
    setSearchResult,
};

export default connect(null, mapDispatchToProps)(SearchBar);