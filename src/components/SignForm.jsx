import React from "react";

import "../assets/styles/components/SignForm.scss";

const SignForm = ({ children, action }) => (
    <form className="sign__container--form" action={action} method="POST">
        {children}
    </form>
);

export default SignForm;