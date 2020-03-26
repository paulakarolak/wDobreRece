import React, { Component } from 'react';
import { Link } from 'react-scroll';
import UserHeader from './UserHeader';

export default class HomeHeader extends Component {
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
                                <Link to="steps" smooth={true} duration={1000}>O co chodzi?</Link>
                            </li>
                            <li>
                            <Link to="about" smooth={true} duration={1000}>O nas</Link>
                            </li>
                            <li>
                                <Link to="/">Fundacja i organizacje</Link>
                            </li>
                            <li>
                            <Link to="contact" smooth={true} duration={1000}>Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                </header>
            </>
        )
    }
}