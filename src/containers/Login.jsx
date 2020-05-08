import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import googleIcon from "../assets/static/google-icon.png";
import twitterIcon from "../assets/static/twitter-icon.png";

import "../assets/styles/components/Login.scss";

const Login = () => (
    <div>
        <Header />
        <section className="login">
            <div className="login__container">
                <h2>¡Bienvenid@ de vuelta!</h2>
                <form className="login__container--form" action="/" method="POST">
                    <input className="input" type="email" placeholder="Correo" aria-label="Campo para ingresar su correo" />
                    <input className="input" type="password" placeholder="Contraseña" aria-label="Campo para ingresar su contraseña" />
                    <button className="button" type="submit">Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label htmlFor="cbox1">
                            <input type="checkbox" id="cbox1" />
                            Recuérdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-networks">
                    <div>
                        <img src={googleIcon} alt="Google icon" />
                        Inicia sesión con Google
                    </div>
                    <div>
                        <img src={twitterIcon} alt="Twitter icon" />
                        Inicia sesión con Twitter
                    </div>
                </section>
                <p className="login__container--not-having-account">
                    ¿Todavía no tenés una cuenta?
                    <a href="/">Registrate</a>
                </p>
            </div>
        </section>
        <Footer />
    </div>
);

export default Login;