import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/LoginSocialNetworks.scss";

import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";

const LoginSocialNetworks = () => (
    <section className="sign__container--social-networks">
        <Link to="/">
            <img src={googleIcon} alt="Google icon" />
            Inicia sesión con Google
        </Link>
        <Link to="/">
            <img src={twitterIcon} alt="Twitter icon" />
            Inicia sesión con Twitter
        </Link>
    </section>
);

export default LoginSocialNetworks;