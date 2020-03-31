import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import HeaderUser from './HeaderUser';

export default class HeaderAlt extends Component {
    render() {
        return (
            <>
                <header className="page-header">
                    <div className="page-menu">
                        <HeaderUser />
                        <ul className="page-nav">
                            <li>
                                <Link to="/">Start</Link>
                            </li>
                            <li>
                                <Link smooth to="/#four-steps">O co chodzi?</Link>
                            </li>
                            <li>
                                <Link smooth to="/#about">O nas</Link>
                            </li>
                            <li>
                                <Link smooth to="/#we-help">Fundacja i organizacje</Link>
                            </li>
                            <li>
                                <Link smooth to="/#footer-contact">Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                </header>
            </>
        )
    }
}