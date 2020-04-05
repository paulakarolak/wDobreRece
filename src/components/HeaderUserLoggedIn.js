import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from '../config/Fire';

export default class HeaderUserLoggedIn extends Component {
    logout() {
        fire.auth().signOut();
    }
    render() {
        return (
            <ul className="user-header logged">
                <li className="hello-user">Cześć Użytkowniku!</li>
                <li>
                    <Link to="/oddaj-rzeczy">Oddaj rzeczy</Link>
                </li>
                <li>
                    <button onClick={this.logout} className="logout">Wyloguj</button>
                </li>
            </ul>
        )
    }
}