import React, { Component } from 'react';
import { Link } from 'react-scroll';
import HeaderUserLoggedIn from './HeaderUserLoggedIn';

export default class HeaderHomeLoggedIn extends Component {
    render() {
        return (
            <>
                <header className="page-header">
                    <div className="page-menu">
                        <HeaderUserLoggedIn />
                        <ul className="page-nav">
                            <li>
                                <Link to="/">Start</Link>
                            </li>
                            <li>
                                <Link to="four-steps" smooth={true} duration={1000}>O co chodzi?</Link>
                            </li>
                            <li>
                                <Link to="about" smooth={true} duration={1000}>O nas</Link>
                            </li>
                            <li>
                                <Link to="we-help" smooth={true} duration={1000}>Fundacja i organizacje</Link>
                            </li>
                            <li>
                                <Link to="footer-contact" smooth={true} duration={1000}>Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                </header>
            </>
        )
    }
}