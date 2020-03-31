import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../config/Fire';
import SectionHeader from './SectionHeader';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
// const formValid = ({ formErrors, ...rest }) => {
//     let valid = true;
//     //validate form errors being empty
//     Object.values(formErrors).forEach(val => {
//         val.length > 0 && (valid = false)
//     });
//     //validate if the form was filled out
//     Object.values(rest).forEach(val => {
//         val === "" && (valid = false);
//     });
//     return valid
// }
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            formErrors: {
                email: "",
                password: "",
            }
        }
    }
    login = e => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }
    // handleSubmit = e => {
    //     e.preventDefault();
    //     if (formValid(this.state)) {
    //         console.log(`Formularz poprawny:
    //         Email: ${this.state.email}
    //         Hasło: ${this.state.password}`)
    //     } else {
    //         console.error("Formularz niepoprawny")
    //     }
    // }
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
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state))
    }
    render() {
        const { formErrors } = this.state;
        return (
            <>
                <section className="login-section">
                    <SectionHeader h2={"Zaloguj się"} />
                    <form id="login-form"
                        name="login-form"
                        onSubmit={this.login}
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
                        </div>
                        <div className="form-buttons">
                            <Link className="tile" to="/rejestracja">
                                <button className="btn-alt">
                                    Założ konto
                    </button>
                            </Link>
                            <button className="btn-alt active">
                                Zaloguj się
                    </button>
                        </div>
                    </form>
                </section>
            </>
        )
    }
}
