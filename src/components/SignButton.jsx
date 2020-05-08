import React from "react";
import PropTypes from "prop-types";

import "../assets/styles/components/SignButton.scss";

const SignButton = ({ text }) => (
    <button className="sign-button" type="submit">{text}</button>
);

SignButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default SignButton;