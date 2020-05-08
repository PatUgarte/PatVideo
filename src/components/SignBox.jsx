import React from "react";
import PropTypes from "prop-types";

import "../assets/styles/components/SignBox.scss";

const SignBox = ({ children, title }) => (
    <section className="sign">
        <div className="sign__container">
            <h2>{title}</h2>
            {children}
        </div>
    </section>
);

SignBox.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SignBox;