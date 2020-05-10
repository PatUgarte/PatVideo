import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { submitUser } from "../actions";

import "../assets/styles/components/SignForm.scss";

const SignForm = (props) => {

    const { children, hasAccount } = props;

    const [form, setValues] = useState({});

    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!(form.email && form.password)) return;

        if (!hasAccount) {
            if (!(form.username)) return;
            props.submitUser(form);
        } else if (form.email !== props.email || form.password !== props.password) return;

        props.history.push("/");
    };

    return (
        <form className="sign__container--form" onSubmit={handleSubmit}>
            {!hasAccount && (
                <input
                    className="sign-input"
                    name="username"
                    type="text"
                    placeholder="Nombre de usuario"
                    onChange={handleInput}
                />
            )}
            <input
                className="sign-input"
                name="email"
                type="email"
                placeholder="Correo electrónico"
                onChange={handleInput}
            />
            <input
                className="sign-input"
                name="password"
                type="password"
                placeholder="Contraseña"
                onChange={handleInput}
            />
            {children}
            {hasAccount && (
                <div className="sign__container--remember-me">
                    <label htmlFor="cbox1">
                        <input type="checkbox" id="cbox1" />
                        Recuérdame
                    </label>
                    <Link to="/">Olvidé mi contraseña</Link>
                </div>
            )}
        </form>
    );
};

const mapStateToProps = (state) => {
    return {
        ...state.user,
    };
};

const mapDispatchToProps = {
    submitUser,
};

SignForm.propTypes = {
    hasAccount: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignForm);