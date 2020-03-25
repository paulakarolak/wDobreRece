import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class UserHeader extends Component {
    render() {
        return (
            <ul className="user-header">
                <li>
                    <Link to="/logowanie">Zaloguj</Link>
                </li>
                <li>
                    <Link to="/rejestracja">Załóż konto</Link>
                </li>
            </ul>

        )
    }
}