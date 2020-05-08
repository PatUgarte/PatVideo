import React from "react";

import "../assets/styles/components/NotFound.scss";

const NotFound = () => (
    <>
        <section className="error">
            <h1 className="error__type">404</h1>
            <h2 className="error__message">Página no encontrada</h2>
        </section>
    </>
);

export default NotFound;