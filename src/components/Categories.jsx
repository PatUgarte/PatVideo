import React from "react";
import PropTypes from "prop-types";

import "../assets/styles/components/Categories.scss";

const Categories = ({ children, title }) => (
    <div>
        <section className="carousel">
            <h2 className="carousel__categories--title">{title}</h2>
            {children}
        </section>
    </div>
);

Categories.propTyper = {
    title: PropTypes.string.isRequired,
};

export default Categories;