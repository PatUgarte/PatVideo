import React from "react";
import "../assets/styles/components/Categories.scss";

const Categories = ({ children, title = "Undefined" }) => (
    <div>
        <section className="carousel">
            <h2 className="carousel__categories--title">{title}</h2>
            {children}
        </section>
    </div>
);

export default Categories;