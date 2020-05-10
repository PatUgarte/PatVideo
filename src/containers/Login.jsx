import React from "react";

import SignBox from "../components/SignBox";
import SignForm from "../components/SignForm";
import SignButton from "../components/SignButton";
import LoginSocialNetworks from "../components/LoginSocialNetworks";
import AccountQuestion from "../components/AccountQuestion";

const Login = (props) => {

    const { history } = props;

    return (
        <>
            <SignBox title="¡Bienvenid@ de vuelta!">
                <SignForm hasAccount={true} history={history}>
                    <SignButton text="Iniciar sesión" />
                </SignForm>
                <LoginSocialNetworks />
                <AccountQuestion
                    question="¿Todavía no tenés una cuenta?"
                    href="/register"
                    hrefMessage="Registrate"
                />
            </SignBox>
        </>
    );
};

export default Login;