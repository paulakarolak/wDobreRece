import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomeHeader extends Component {
    render() {
        return (
            <>
                <header className="page-header">
                    <div className="page-menu">
                        <ul className="user-header">
                            <li>
                                <Link to="/logowanie">Zaloguj</Link>
                            </li>
                            <li>
                                <Link to="/rejestracja">Załóż konto</Link>
                            </li>
                        </ul>
                        <ul className="page-nav">
                            <li>
                                <Link to="/">Start</Link>
                            </li>
                            <li>
                                <Link to="/">O co chodzi?</Link>
                            </li>
                            <li>
                                <Link to="/">O nas</Link>
                            </li>
                            <li>
                                <Link to="/">Fundacja i organizacje</Link>
                            </li>
                            <li>
                                <Link to="/">Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                </header>
            </>
        )
    }
}