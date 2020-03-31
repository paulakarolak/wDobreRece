import React, { Component } from 'react';
import HeaderAlt from './HeaderAlt';
import SectionHeader from './SectionHeader';
import { Link } from 'react-router-dom';

export default class LoggedOut extends Component {
    render() {
        return (
            <>
                <HeaderAlt />
                <section className="logout-section">
                    <SectionHeader h2={"Wylogowanie nastąpiło pomyślnie!"} />
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