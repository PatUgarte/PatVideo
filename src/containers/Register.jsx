import React from "react";

import SignBox from "../components/SignBox";
import SignForm from "../components/SignForm";
import SignInput from "../components/SignInput";
import SignButton from "../components/SignButton";
import AccountQuestion from "../components/AccountQuestion";

const Register = () => (
    <>
        <SignBox title="A un paso de algo increible...">
            <SignForm action="/">
                <SignInput type="text" placeholder="Nombre de usuario" />
                <SignInput type="email" placeholder="Correo" />
                <SignInput type="password" placeholder="Contraseña" />
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

export default Register;