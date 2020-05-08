import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../assets/styles/components/AccountQuestion.scss";

const AccountQuestion = ({ question, href, hrefMessage }) => (
    <p className="sign__container--not-having-account">
        {question}
        <Link to={href}>{hrefMessage}</Link>
    </p>
);

AccountQuestion.propTypes = {
    question: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    hrefMessage: PropTypes.string.isRequired,
};

export default AccountQuestion;