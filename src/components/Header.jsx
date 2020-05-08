import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Header.scss";

import patVideoLogo from "../assets/static/patvideo-logo.png";
import profileLogo from "../assets/static/cat-profile-filled.png";

const Header = () => (
    <header className="header">
        <Link to="/">
            <img className="header__img" src={patVideoLogo} alt="PatVideo logo" />
        </Link>
        <div className="header__menu">
            <div className="header__menu--hidden">
                <img src={profileLogo} alt="Profile logo" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><Link to="/login">Cuenta</Link></li>
                <li><Link to="/register">Cerrar Sesión</Link></li>
            </ul>
        </div>
    </header>
);

export default Header;