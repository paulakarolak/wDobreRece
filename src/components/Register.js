import React, { Component } from 'react';
import AltHeader from './AltHeader';
import { Link } from 'react-router-dom';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    //validate form errors being empty
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    //validate if the form was filled out
    Object.values(rest).forEach(val => {
        val === "" && (valid = false);
    });

    return valid
}

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            passwordRepeat: "",
            formErrors: {
                email: "",
                password: "",
                passwordRepeat: "",
            }
        }
    }
    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            if (this.state.password === this.state.passwordRepeat) {
                console.log(`Formularz poprawny:
            Email: ${this.state.email}
            Hasło: ${this.state.password}
            Powtórz hasło: ${this.state.passwordRepeat}`)
            } else {
                console.log("Hasła nie są zgodne");
            }
        } else {
            console.error("Formularz niepoprawny")
        }
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'email':
                formErrors.email = emailRegex.test(value) ? "" : 'Podany email jest nieprawidłowy!';
                break;
            case 'password':
                formErrors.password = value.length < 6 ? 'Podane hasło jest za krótkie!' : "";
                break;
            case 'passwordRepeat':
                formErrors.passwordRepeat = value.length < 6 ? 'Podane hasło jest za krótkie!' : "";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state))
    }

    render() {
        const { formErrors } = this.state;
        const { password, passwordRepeat } = this.state;
        return (
            <>
                <AltHeader />
                <section className="register-section">
                    <h2 className="section-header">Załóż konto</h2>
                    <div className="decoration"></div>
                    <form id="login-form"
                        name="login-form"
                        onSubmit={this.handleSubmit}
                        noValidate>
                        <div className="form-area">
                            <div className="form-row">
                                <label for="email">Email</label>
                                <input
                                    type="email"
                                    className={formErrors.email.length > 0 ? "error" : null}
                                    id="email"
                                    name="email"
                                    autoComplete="off"
                                    noValidate
                                    onChange={this.handleChange} />
                                {formErrors.email.length > 0 && (
                                    <span className="error-message">{formErrors.email}</span>
                                )}
                            </div>
                            <div className="form-row form-pass">
                                <label for="password">Hasło</label>
                                <input
                                    type="password"
                                    className={formErrors.password.length > 0 ? "error" : null}
                                    id="password"
                                    name="password"
                                    autoComplete="off"
                                    noValidate
                                    onChange={this.handleChange} />
                                {formErrors.password.length > 0 && (
                                    <span className="error-message">{formErrors.password}</span>
                                )}
                            </div>
                            <div className="form-row">
                                <label for="password">Powtórz hasło</label>
                                <input
                                    type="password"
                                    className={formErrors.passwordRepeat.length > 0 ? "error" : null}
                                    id="password"
                                    name="passwordRepeat"
                                    autoComplete="off"
                                    noValidate
                                    onChange={this.handleChange} />
                                {formErrors.passwordRepeat.length > 0 && (
                                    <span className="error-message">{formErrors.passwordRepeat}</span>
                                )}
                                {passwordRepeat != password && (
                                    <span className="error-message">Hasła muszą być takie same!</span>
                                )}
                            </div>
                        </div>
                        <div className="form-buttons">
                            <Link className="tile" to="/logowanie">
                                <button className="btn-alt">
                                    Zaloguj się
                            </button>
                            </Link>
                            <button className="btn-alt active">
                                Załóż konto
                        </button>
                        </div>
                    </form>
                </section>
            </>
        )
    }
}




