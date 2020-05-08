import React from "react";

import "../assets/styles/components/SignBox.scss";

const SignBox = ({ children, title }) => (
    <section className="sign">
        <div className="sign__container">
            <h2>{title}</h2>
            {children}
        </div>
    </section>
);

export default SignBox;