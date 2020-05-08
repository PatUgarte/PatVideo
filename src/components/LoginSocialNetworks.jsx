import React from "react";

import "../assets/styles/components/LoginSocialNetworks.scss";

import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";

const LoginSocialNetworks = () => (
    <section className="sign__container--social-networks">
        <div>
            <img src={googleIcon} alt="Google icon" />
            Inicia sesión con Google
        </div>
        <div>
            <img src={twitterIcon} alt="Twitter icon" />
            Inicia sesión con Twitter
        </div>
    </section>
);

export default LoginSocialNetworks;