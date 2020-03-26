import React from 'react';
import contactImg from '../assets/Background-Contact-Form.jpg';
import fb from '../assets/Facebook.svg';
import insta from '../assets/Instagram.svg'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-background">
                <img src={contactImg} alt=""></img>
                <div className="contact-form-area">
                    <h2 className="section-header">Skontaktuj się z nami</h2>
                    <div className="decoration"></div>
                </div>
            </div>
            <div className="copyright-section">
                <div className="copyright-info">
                    <h6>Copyright by Coders Lab</h6>
                </div>
                <div className="social-media">
                    <a href="http://facebook.com" target="_blank">
                        <img src={fb} alt="facebook-icon"></img>
                    </a>
                    <a href="http://instagram.com" target="_blank">
                        <img src={insta} alt="instagram-icon"></img>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact;