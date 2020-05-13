import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { toggleLog } from "../actions";
import createGravatar from "../utils/gravatar";

import "../assets/styles/components/Header.scss";

import patVideoLogo from "../assets/static/patvideo-logo.png";
import profileLogo from "../assets/static/cat-profile-filled.png";

const Header = (props) => {

    const { user } = props;
    const profilePic = createGravatar(user.email);

    const handleLogout = () => {
        props.toggleLog(false);
    };

    return (
        <header className="header">
            <Link to="/">
                <img className="header__img" src={patVideoLogo} alt="PatVideo logo" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--hidden">
                    {user.loggedIn ? (
                        <img
                            className="header__profile-picture"
                            src={profilePic}
                            alt={user.username}
                        />
                    ) : (
                        <img
                            className="header__profile-picture"
                            src={profileLogo}
                            alt="Profile logo"
                        />
                    )}
                    <p>{user.loggedIn ? user.username : "Perfil"}</p>
                </div>
                <ul>
                    {user.loggedIn ? (
                        <li>
                            <Link to="#logout" onClick={handleLogout}>Cerrar Sesión</Link>
                        </li>
                    ) : (
                        <li>
                            <Link to="/login">Iniciar Sesión</Link>
                        </li>
                    )}
                </ul>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = {
    toggleLog,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);