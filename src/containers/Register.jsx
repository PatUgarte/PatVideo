import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "../assets/styles/components/Login.scss";

const Register = () => (
    <div>
        <Header />
        <section className="login">
            <div className="login__container">
                <h2>A un paso de algo increible...</h2>
                <form className="login__container--form" action="/" method="POST">
                    <input className="input" type="text" placeholder="Nombre de usuario" aria-label="Campo para ingresar su Nombre de usuario" />
                    <input className="input" type="email" placeholder="Correo" aria-label="Campo para ingresar su correo" />
                    <input className="input" type="password" placeholder="Contraseña" aria-label="Campo para ingresar su contraseña" />
                    <button className="button" type="submit">Registrarme</button>
                </form>
                <p className="login__container--not-having-account">
                    ¿Ya tenés una cuenta?
                    <a href="/">Iniciá sesión aquí</a>
                </p>
            </div>
        </section>
        <Footer />
    </div>
);

export default Register;