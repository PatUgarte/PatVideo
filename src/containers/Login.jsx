import React from "react";

import Header from "../components/Header";
import SignBox from "../components/SignBox";
import SignForm from "../components/SignForm";
import SignInput from "../components/SignInput";
import SignButton from "../components/SignButton";
import LoginOptions from "../components/LoginOptions";
import LoginSocialNetworks from "../components/LoginSocialNetworks";
import AccountQuestion from "../components/AccountQuestion";
import Footer from "../components/Footer";

const Login = () => (
    <div>
        <Header />
        <SignBox title="¡Bienvenid@ de vuelta!">
            <SignForm action="/">
                <SignInput type="email" placeholder="Correo" />
                <SignInput type="password" placeholder="Contraseña" />
                <SignButton text="Iniciar sesión" />
                <LoginOptions />
            </SignForm>
            <LoginSocialNetworks />
            <AccountQuestion
                question="¿Todavía no tenés una cuenta?"
                href="/register"
                hrefMessage="Registrate"
            />
        </SignBox>
        <Footer />
    </div>
);

export default Login;