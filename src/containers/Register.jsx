import React from "react";

import SignBox from "../components/SignBox";
import SignForm from "../components/SignForm";
import SignButton from "../components/SignButton";
import AccountQuestion from "../components/AccountQuestion";

const Register = (props) => {

    const { history } = props;

    return (
        <>
            <SignBox title="A un paso de algo increible...">
                <SignForm hasAccount={false} history={history}>
                    <SignButton text="Registrarme" />
                </SignForm>
                <AccountQuestion
                    question="¿Ya tenés una cuenta?"
                    href="/login"
                    hrefMessage="Iniciá sesión aquí"
                />
            </SignBox>
        </>
    );
};

export default Register;