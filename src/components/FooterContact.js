import React, { Component } from 'react';
import ContactImg from '../assets/Background-Contact-Form.jpg';
import FooterCopyright from './FooterCopyright';
import SectionHeader from './SectionHeader';
import axios from 'axios';

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
export default class FooterContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            formErrors: {
                name: "",
                email: "",
                message: "",
            },
        }
    }
    handleSubmit = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formSent = this.state.formSent;
        if (formValid(this.state)) {
            console.log(`Formularz poprawny:
            Imię: ${this.state.name}
            Email: ${this.state.email}
            Wiadomość: ${this.state.message}`);
            formSent = true;
            axios
                .post('https://fer-api.coderslab.pl/v1/portfolio/Contact', this.state)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        } else {
            console.error("Formularz niepoprawny");
            formSent = false;
        }
        this.setState({ formSent, [name]: value }, () => console.log(this.state))
    }
    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
        switch (name) {
            case 'name':
                formErrors.name = value.trim().split(" ").length === 1 ? "" : 'Podane imię jest nieprawidłowe!';
                break;
            case 'email':
                formErrors.email = emailRegex.test(value) ? "" : 'Podany email jest nieprawidłowy!';
                break;
            case 'message':
                formErrors.message = value.length < 120 ? 'Wiadomość musi mieć conajmniej 120 znaków!' : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state))
    }
    render() {
        const { formErrors } = this.state;
        const { formSent } = this.state;
        return (
            <section className="footer-contact" id="footer-contact">
                <div className="footer-contact-background">
                    <img src={ContactImg} alt=""></img>
                    <div className="footer-contact-form">
                        <SectionHeader h2={"Skontaktuj się z nami"} />
                        <form id="footer-contact-form"
                            name="footer-contact-form"
                            onSubmit={this.handleSubmit}
                            noValidate>
                            {formSent === true && (
                                <span className="success-message">Wiadomość została wysłana!<br />Wkrótce się skontaktujemy.</span>
                            )}
                            <div className="footer-contact-form-area">
                                <div className="rows">
                                    <div className="form-row">
                                        <label for="name">Wpisz swoje imię</label>
                                        <input
                                            type="name"
                                            className={formErrors.name.length > 0 ? "error" : null}
                                            id="footer-contact-name"
                                            name="name"
                                            autoComplete="off"
                                            placeholder="Krzysztof"
                                            noValidate
                                            onChange={this.handleChange} />
                                        {formErrors.name.length > 0 && (
                                            <span className="error-message">{formErrors.name}</span>
                                        )}
                                    </div>
                                    <div className="form-row form-pass">
                                        <label for="footer-contact-email">Wpisz swój email</label>
                                        <input
                                            type="email"
                                            className={formErrors.email.length > 0 ? "error" : null}
                                            id="footer-contact-email"
                                            name="email"
                                            autoComplete="off"
                                            placeholder="abc@xyz.pl"
                                            noValidate
                                            onChange={this.handleChange} />
                                        {formErrors.email.length > 0 && (
                                            <span className="error-message">{formErrors.email}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="message">
                                    <label for="message">Wpisz swoją wiadomość</label>
                                    <textarea
                                        form="footer-contact-form"
                                        className={formErrors.message.length > 0 ? "error" : null}
                                        id="message"
                                        name="message"
                                        cols="50"
                                        rows="4"
                                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                        noValidate
                                        onChange={this.handleChange}></textarea>
                                    {formErrors.message.length > 0 && (
                                        <span className="error-message">{formErrors.message}</span>
                                    )}
                                </div>
                            </div>
                            <div className="form-buttons">
                                <button className="btn-alt active">
                                    Wyślij
                        </button>
                            </div>
                        </form>
                    </div>
                </div>
                <FooterCopyright />
            </section>
        )
    }
}

