import React, { Component } from 'react';
import HeaderAlt from './HeaderAlt';
import { Link } from 'react-router-dom';

export default class Error extends Component {
    render() {
        return (
            <>
                <HeaderAlt />
                <section className="logout-section">
                    <h2 className="section-header">Strona o podanym adresie<br />nie istnieje.</h2>
                    <div className="decoration"></div>
                    <Link className="tile" to="/">
                        <button className="btn-alt active">
                            Strona główna
                    </button>
                    </Link>
                </section>
            </>
        )
    }
}