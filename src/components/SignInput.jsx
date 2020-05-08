import React from "react";
import PropTypes from "prop-types";

import "../assets/styles/components/SignInput.scss";

const SignInput = ({ type, placeholder }) => (
    <input className="sign-input" type={type} placeholder={placeholder} />
);

SignInput.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
};

export default SignInput;