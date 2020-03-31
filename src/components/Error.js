import React, { Component } from 'react';
import HeaderAlt from './HeaderAlt';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';

export default class Error extends Component {
    render() {
        return (
            <>
                <HeaderAlt />
                <section className="logout-section">
                    <SectionHeader h2={"Strona o podanym adresie nie istnieje."} />
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