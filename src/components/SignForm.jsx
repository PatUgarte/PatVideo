import React from "react";
import PropTypes from "prop-types";

import "../assets/styles/components/SignForm.scss";

const SignForm = ({ children, action }) => (
    <form className="sign__container--form" action={action} method="POST">
        {children}
    </form>
);

SignForm.proptypes = {
    action: PropTypes.string.isRequired,
};

export default SignForm;