import React from 'react';
import contactImg from '../assets/Background-Contact-Form.jpg';
import Copyright from './Copyright'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-background">
                <img src={contactImg} alt=""></img>
                <div className="contact-form">
                    <h2 className="section-header">Skontaktuj się z nami</h2>
                    <div className="decoration"></div>
                    <div className="contact-form-area">
                        <div className="rows">
                            <div className="form-row">
                                <label for="name">Wpisz swoje imię</label>
                                <input type="name" className="name" id="name" name="name" autoComplete="on" placeholder="Krzysztof" />
                            </div>
                            <div className="form-row form-pass">
                                <label for="contact-email">Wpisz swój email</label>
                                <input type="email" className="contact-email" id="contact-email" name="contact-email" autoComplete="on" placeholder="abc@xyz.pl" />
                            </div>
                        </div>
                        <div className="message">
                            <label for="message">Wpisz swoją wiadomość</label>
                            <textarea form="contact-form" id="message" name="message" cols="50" rows="4" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button className="btn-alt active">
                            Wyślij
                        </button>
                    </div>
                </div>
            </div>
            <Copyright />
        </section>
    )
}

export default Contact;