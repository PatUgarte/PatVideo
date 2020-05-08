import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/LoginOptions.scss";

const LoginOptions = () => (
    <div className="sign__container--remember-me">
        <label htmlFor="cbox1">
            <input type="checkbox" id="cbox1" />
            Recuérdame
        </label>
        <Link to="/">Olvidé mi contraseña</Link>
    </div>
);

export default LoginOptions;