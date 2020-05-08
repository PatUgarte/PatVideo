import React from "react";

import "../assets/styles/components/LoginOptions.scss";

const LoginOptions = () => (
    <div className="sign__container--remember-me">
        <label htmlFor="cbox1">
            <input type="checkbox" id="cbox1" />
            Recuérdame
        </label>
        <a href="/">Olvidé mi contraseña</a>
    </div>
);

export default LoginOptions;