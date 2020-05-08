import React from "react";

import "../assets/styles/components/SignButton.scss";

const SignButton = ({ text }) => (
    <button className="sign-button" type="submit">{text}</button>
);

export default SignButton;