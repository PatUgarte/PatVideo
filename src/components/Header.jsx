import React from "react";
import "../assets/styles/components/Header.scss";

import patVideoLogo from "../assets/static/patvideo-logo.png";
import profileLogo from "../assets/static/cat-profile-filled.png";

const Header = () => (
    <header className="header">
        <img className="header__img" src={patVideoLogo} alt="PatVideo logo" />
        <div className="header__menu">
            <div className="header__menu--hidden">
                <img src={profileLogo} alt="Profile logo" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
);

export default Header;