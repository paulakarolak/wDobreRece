import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import UserHeader from './UserHeader';

export default class AltHeader extends Component {
    render() {
        return (
            <>
                <header className="page-header">
                    <div className="page-menu">
                        <UserHeader />
                        <ul className="page-nav">
                            <li>
                                <Link to="/">Start</Link>
                            </li>
                            <li>
                                <Link smooth to="/#steps">O co chodzi?</Link>
                            </li>
                            <li>
                            <Link smooth to="/#about">O nas</Link>
                            </li>
                            <li>
                                <Link smooth to="/#entities">Fundacja i organizacje</Link>
                            </li>
                            <li>
                            <Link smooth to="/#contact">Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                </header>
            </>
        )
    }
}