import React from "react";

import "../assets/styles/components/AccountQuestion.scss";

const AccountQuestion = ({ question, href, hrefMessage }) => (
    <p className="sign__container--not-having-account">
        {question}
        <a href={href}>{hrefMessage}</a>
    </p>
);

export default AccountQuestion;