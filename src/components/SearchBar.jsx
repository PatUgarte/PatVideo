import React from "react";

import "../assets/styles/components/SearchBar.scss";

const SearchBar = () => (
    <section className="search-bar">
        <h2 className="search-bar__title">¿Qué deseas ver hoy?</h2>
        <input className="input" type="text" placeholder="Buscar..." aria-label="Barra de búsqueda de videos" />
    </section>
);

export default SearchBar;