import React, { Component } from 'react';
import fb from '../assets/Facebook.svg';
import insta from '../assets/Instagram.svg'

export default class FooterCopyright extends Component {
    render() {
        return (
            <div className="footer-copyright-section">
                <div className="footer-copyright-info">
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
        )
    }
}