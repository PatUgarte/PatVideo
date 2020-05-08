import React from "react";

import "../assets/styles/components/SignInput.scss";

const SignInput = ({ type, placeholder }) => (
    <input className="sign-input" type={type} placeholder={placeholder} />
);

export default SignInput;